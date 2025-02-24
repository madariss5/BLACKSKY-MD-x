const { isAdmin } = require('../lib/connection');
const { getDatabase, saveDatabase } = require('../lib/database');
const config = require('../config');

module.exports = {
    commands: ['warn', 'unwarn', 'warnlist'],
    
    async execute(sock, msg, args) {
        if (!msg.key.remoteJid.endsWith('@g.us')) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'This command can only be used in groups.' });
            return;
        }

        const isGroupAdmin = await isAdmin(sock, msg.key.remoteJid, msg.key.participant);
        
        if (!isGroupAdmin && !config.owner.includes(msg.key.participant)) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'This command requires admin privileges.' });
            return;
        }

        const command = msg.message?.conversation?.split(' ')[0].slice(1) || 
                       msg.message?.extendedTextMessage?.text?.split(' ')[0].slice(1);
        
        const db = getDatabase();
        if (!db.warnings[msg.key.remoteJid]) {
            db.warnings[msg.key.remoteJid] = {};
        }

        switch (command) {
            case 'warn':
                try {
                    if (args.length === 0) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Please specify a user to warn. Format: !warn @user [reason]' });
                        return;
                    }

                    const userToWarn = args[0].replace('@', '') + '@s.whatsapp.net';
                    const reason = args.slice(1).join(' ') || 'No reason provided';

                    // Can't warn admins
                    const isTargetAdmin = await isAdmin(sock, msg.key.remoteJid, userToWarn);
                    if (isTargetAdmin) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Cannot warn group admins.' });
                        return;
                    }

                    // Initialize warnings for user if not exists
                    if (!db.warnings[msg.key.remoteJid][userToWarn]) {
                        db.warnings[msg.key.remoteJid][userToWarn] = 0;
                    }

                    db.warnings[msg.key.remoteJid][userToWarn]++;
                    await saveDatabase();

                    const warningCount = db.warnings[msg.key.remoteJid][userToWarn];
                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `⚠️ @${userToWarn.split('@')[0]} has been warned!\n\n*Reason:* ${reason}\n*Warning Count:* ${warningCount}`,
                        mentions: [userToWarn]
                    });

                    // Auto-kick on 3 warnings if bot is admin
                    if (warningCount >= 3) {
                        try {
                            await sock.groupParticipantsUpdate(msg.key.remoteJid, [userToWarn], "remove");
                            await sock.sendMessage(msg.key.remoteJid, { 
                                text: `@${userToWarn.split('@')[0]} has been removed from the group for receiving 3 warnings.`,
                                mentions: [userToWarn]
                            });
                            // Reset warnings after kick
                            db.warnings[msg.key.remoteJid][userToWarn] = 0;
                            await saveDatabase();
                        } catch (err) {
                            console.error('Auto-kick error:', err);
                            await sock.sendMessage(msg.key.remoteJid, { 
                                text: 'Failed to remove user automatically. Please remove them manually.'
                            });
                        }
                    }
                } catch (err) {
                    console.error('Warning error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to warn user.' });
                }
                break;

            case 'unwarn':
                try {
                    if (args.length === 0) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Please specify a user to remove warning from. Format: !unwarn @user' });
                        return;
                    }

                    const userToUnwarn = args[0].replace('@', '') + '@s.whatsapp.net';
                    
                    if (!db.warnings[msg.key.remoteJid][userToUnwarn] || 
                        db.warnings[msg.key.remoteJid][userToUnwarn] === 0) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'This user has no warnings.' });
                        return;
                    }

                    db.warnings[msg.key.remoteJid][userToUnwarn]--;
                    await saveDatabase();

                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `✅ Removed 1 warning from @${userToUnwarn.split('@')[0]}.\nCurrent warnings: ${db.warnings[msg.key.remoteJid][userToUnwarn]}`,
                        mentions: [userToUnwarn]
                    });
                } catch (err) {
                    console.error('Unwarn error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to remove warning.' });
                }
                break;

            case 'warnlist':
                try {
                    const warnings = db.warnings[msg.key.remoteJid];
                    const warnedUsers = Object.entries(warnings || {})
                        .filter(([_, count]) => count > 0)
                        .map(([user, count]) => `@${user.split('@')[0]}: ${count} warning(s)`);

                    if (warnedUsers.length === 0) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'No users have been warned in this group.' });
                        return;
                    }

                    const warningList = `📋 *Group Warning List*\n\n${warnedUsers.join('\n')}`;
                    
                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: warningList,
                        mentions: Object.keys(warnings || {}).filter(user => warnings[user] > 0)
                    });
                } catch (err) {
                    console.error('Warnlist error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to retrieve warning list.' });
                }
                break;
        }
    }
};
