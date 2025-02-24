const config = require('../config');
const { getDatabase } = require('../lib/database');

module.exports = {
    commands: ['broadcast', 'eval', 'restart'],
    
    async execute(sock, msg, args) {
        if (!config.owner.includes(msg.key.participant)) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'This command is only for bot owner.' });
            return;
        }

        const command = msg.message?.conversation?.split(' ')[0].slice(1) || 
                       msg.message?.extendedTextMessage?.text?.split(' ')[0].slice(1);

        switch (command) {
            case 'broadcast':
                try {
                    const db = getDatabase();
                    const message = args.join(' ');
                    
                    if (!message) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a message to broadcast.' });
                        return;
                    }

                    let sent = 0;
                    for (const group of Object.keys(db.data.groups)) {
                        await sock.sendMessage(group, { text: `📢 *Broadcast*\n\n${message}` });
                        sent++;
                    }

                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `Broadcast sent to ${sent} groups.`
                    });
                } catch (err) {
                    console.error('Broadcast error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to send broadcast.' });
                }
                break;

            case 'eval':
                try {
                    const code = args.join(' ');
                    if (!code) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Please provide code to evaluate.' });
                        return;
                    }

                    let result = eval(code);
                    if (typeof result !== 'string') result = require('util').inspect(result);
                    
                    await sock.sendMessage(msg.key.remoteJid, { text: result });
                } catch (err) {
                    console.error('Eval error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: `Error: ${err.message}` });
                }
                break;

            case 'restart':
                await sock.sendMessage(msg.key.remoteJid, { text: 'Restarting bot...' });
                process.exit(0);
                break;
        }
    }
};
