const config = require('../config');
const { getDatabase, saveDatabase } = require('../lib/database');

module.exports = {
    commands: ['broadcast', 'eval', 'restart', 'ban', 'unban', 'banlist'],

    async execute(sock, msg, args) {
        if (!config.owner.includes(msg.key.participant)) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'This command is only for bot owner.' });
            return;
        }

        const command = msg.message?.conversation?.split(' ')[0].slice(1) || 
                       msg.message?.extendedTextMessage?.text?.split(' ')[0].slice(1);

        switch (command) {
            case 'ban':
                try {
                    if (args.length === 0) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Please specify a user to ban. Format: !ban @user' });
                        return;
                    }

                    const db = getDatabase();
                    const userToBan = args[0].replace('@', '') + '@s.whatsapp.net';

                    if (config.owner.includes(userToBan)) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Cannot ban bot owner!' });
                        return;
                    }

                    if (db.banned.includes(userToBan)) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'User is already banned.' });
                        return;
                    }

                    db.banned.push(userToBan);
                    await saveDatabase();
                    await sock.sendMessage(msg.key.remoteJid, { text: 'User has been banned from using the bot.' });
                } catch (err) {
                    console.error('Ban error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to ban user.' });
                }
                break;

            case 'unban':
                try {
                    if (args.length === 0) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Please specify a user to unban. Format: !unban @user' });
                        return;
                    }

                    const db = getDatabase();
                    const userToUnban = args[0].replace('@', '') + '@s.whatsapp.net';
                    const index = db.banned.indexOf(userToUnban);

                    if (index === -1) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'User is not banned.' });
                        return;
                    }

                    db.banned.splice(index, 1);
                    await saveDatabase();
                    await sock.sendMessage(msg.key.remoteJid, { text: 'User has been unbanned.' });
                } catch (err) {
                    console.error('Unban error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to unban user.' });
                }
                break;

            case 'banlist':
                try {
                    const db = getDatabase();
                    if (db.banned.length === 0) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'No users are currently banned.' });
                        return;
                    }

                    const banList = db.banned.map(id => `@${id.split('@')[0]}`).join('\n');
                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `📋 *Banned Users List*\n\n${banList}`,
                        mentions: db.banned
                    });
                } catch (err) {
                    console.error('Banlist error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to retrieve ban list.' });
                }
                break;

            case 'broadcast':
                try {
                    const db = getDatabase();
                    const message = args.join(' ');

                    if (!message) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a message to broadcast.' });
                        return;
                    }

                    let sent = 0;
                    for (const group of Object.keys(db.groups)) {
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