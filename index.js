const { default: makeWASocket, DisconnectReason, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const P = require('pino');
const { initDatabase } = require('./lib/database');
const { messageHandler } = require('./lib/msgHandler');
const config = require('./config');

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');
    
    const sock = makeWASocket({
        printQRInTerminal: true,
        auth: state,
        logger: P({ level: 'silent' })
    });

    // Handle connection events
    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        
        if(connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error instanceof Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            
            if(shouldReconnect) {
                connectToWhatsApp();
            }
        }
    });

    // Handle credentials update
    sock.ev.on('creds.update', saveCreds);

    // Handle messages
    sock.ev.on('messages.upsert', async m => {
        if (m.type === 'notify') {
            try {
                await messageHandler(sock, m.messages[0]);
            } catch (err) {
                console.error('Error in message handler:', err);
            }
        }
    });
}

// Initialize database and start the bot
async function startBot() {
    try {
        await initDatabase();
        connectToWhatsApp();
    } catch (err) {
        console.error('Failed to start bot:', err);
        process.exit(1);
    }
}

startBot();
