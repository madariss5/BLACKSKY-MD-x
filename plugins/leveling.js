const { getUserData, getXPNeeded, addUserXP } = require('../lib/database');

module.exports = {
    commands: ['level', 'levelup', 'leveling', 'me', 'profile', 'xp'],
    
    async execute(sock, msg, args) {
        const command = msg.message?.conversation?.split(' ')[0].slice(1) || 
                       msg.message?.extendedTextMessage?.text?.split(' ')[0].slice(1);

        const userData = getUserData(msg.key.participant);

        switch (command) {
            case 'level':
            case 'me':
            case 'profile':
                try {
                    const xpNeeded = getXPNeeded(userData.level);
                    const progress = Math.floor((userData.xp / xpNeeded) * 100);
                    
                    const message = `👤 *User Profile - @${msg.key.participant.split('@')[0]}*\n\n` +
                        `📊 Level: ${userData.level}\n` +
                        `✨ XP: ${userData.xp}/${xpNeeded} (${progress}%)\n` +
                        `💬 Messages: ${userData.messages}\n` +
                        `🎯 Commands Used: ${userData.commandsUsed}\n` +
                        `📝 Bio: ${userData.profile.bio || 'Not set'}\n` +
                        `🏷️ Status: ${userData.profile.status}\n` +
                        `📅 Registered: ${new Date(userData.profile.registered).toLocaleDateString()}`;

                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: message,
                        mentions: [msg.key.participant]
                    });
                } catch (err) {
                    console.error('Profile command error:', err);
                }
                break;

            case 'xp':
                try {
                    const xpNeeded = getXPNeeded(userData.level);
                    const progress = Math.floor((userData.xp / xpNeeded) * 100);
                    const progressBar = '█'.repeat(Math.floor(progress/10)) + '░'.repeat(10 - Math.floor(progress/10));
                    
                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `📊 *XP Progress - @${msg.key.participant.split('@')[0]}*\n\n` +
                              `Level ${userData.level} | XP: ${userData.xp}/${xpNeeded}\n` +
                              `[${progressBar}] ${progress}%`,
                        mentions: [msg.key.participant]
                    });
                } catch (err) {
                    console.error('XP command error:', err);
                }
                break;

            case 'levelup':
                try {
                    // Add some XP for testing level up
                    const didLevelUp = await addUserXP(msg.key.participant, 50);
                    if (didLevelUp) {
                        await sock.sendMessage(msg.key.remoteJid, { 
                            text: `🎉 Congratulations @${msg.key.participant.split('@')[0]}!\n` +
                                 `You've reached level ${userData.level}!`,
                            mentions: [msg.key.participant]
                        });
                    } else {
                        const xpNeeded = getXPNeeded(userData.level);
                        await sock.sendMessage(msg.key.remoteJid, { 
                            text: `Keep going @${msg.key.participant.split('@')[0]}!\n` +
                                 `You need ${xpNeeded - userData.xp} more XP to level up!`,
                            mentions: [msg.key.participant]
                        });
                    }
                } catch (err) {
                    console.error('Levelup command error:', err);
                }
                break;

            case 'leveling':
                try {
                    const levels = Object.entries(getUserData(msg.key.participant))
                        .filter(([key]) => ['level', 'xp', 'messages', 'commandsUsed'].includes(key))
                        .map(([key, value]) => `${key}: ${value}`)
                        .join('\n');
                    
                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `📈 *Leveling Stats - @${msg.key.participant.split('@')[0]}*\n\n${levels}`,
                        mentions: [msg.key.participant]
                    });
                } catch (err) {
                    console.error('Leveling command error:', err);
                }
                break;
        }
    }
};
