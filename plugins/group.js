const { isAdmin, updateGroupMetadata } = require('../lib/connection');
const { getDatabase } = require('../lib/database');

module.exports = {
    commands: ['kick', 'add', 'promote', 'demote', 'link'],
    
    async execute(sock, msg, args) {
        if (!msg.key.remoteJid.endsWith('@g.us')) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'This command can only be used in groups.' });
            return;
        }

        const command = msg.message?.conversation?.split(' ')[0].slice(1) || 
                       msg.message?.extendedTextMessage?.text?.split(' ')[0].slice(1);
        
        const isGroupAdmin = await isAdmin(sock, msg.key.remoteJid, msg.key.participant);
        
        if (!isGroupAdmin && !config.owner.includes(msg.key.participant)) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'This command requires admin privileges.' });
            return;
        }

        switch (command) {
            case 'kick':
                if (args.length === 0) return;
                try {
                    const user = args[0].replace('@', '') + '@s.whatsapp.net';
                    await sock.groupParticipantsUpdate(msg.key.remoteJid, [user], "remove");
                    await sock.sendMessage(msg.key.remoteJid, { text: 'User has been kicked.' });
                } catch (err) {
                    console.error('Kick error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to kick user.' });
                }
                break;

            case 'add':
                if (args.length === 0) return;
                try {
                    const user = args[0].replace('@', '') + '@s.whatsapp.net';
                    await sock.groupParticipantsUpdate(msg.key.remoteJid, [user], "add");
                    await sock.sendMessage(msg.key.remoteJid, { text: 'User has been added.' });
                } catch (err) {
                    console.error('Add error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to add user.' });
                }
                break;

            case 'promote':
                if (args.length === 0) return;
                try {
                    const user = args[0].replace('@', '') + '@s.whatsapp.net';
                    await sock.groupParticipantsUpdate(msg.key.remoteJid, [user], "promote");
                    await sock.sendMessage(msg.key.remoteJid, { text: 'User has been promoted to admin.' });
                } catch (err) {
                    console.error('Promote error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to promote user.' });
                }
                break;

            case 'demote':
                if (args.length === 0) return;
                try {
                    const user = args[0].replace('@', '') + '@s.whatsapp.net';
                    await sock.groupParticipantsUpdate(msg.key.remoteJid, [user], "demote");
                    await sock.sendMessage(msg.key.remoteJid, { text: 'User has been demoted.' });
                } catch (err) {
                    console.error('Demote error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to demote user.' });
                }
                break;

            case 'link':
                try {
                    const code = await sock.groupInviteCode(msg.key.remoteJid);
                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `https://chat.whatsapp.com/${code}`
                    });
                } catch (err) {
                    console.error('Link error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to get group link.' });
                }
                break;
        }
    }
};
