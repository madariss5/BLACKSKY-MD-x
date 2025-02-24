const { getUserData, addUserXP } = require('../lib/database');

module.exports = {
    commands: ['fuck', 'horny', 'cum'],
    
    async execute(sock, msg, args) {
        const command = msg.message?.conversation?.split(' ')[0].slice(1) || 
                       msg.message?.extendedTextMessage?.text?.split(' ')[0].slice(1);

        // Add XP for using commands
        await addUserXP(msg.key.participant, 5);

        switch (command) {
            case 'fuck':
                try {
                    if (args.length === 0) {
                        await sock.sendMessage(msg.key.remoteJid, { text: '🔞 Who do you want to fuck?' });
                        return;
                    }

                    const target = args[0].replace('@', '') + '@s.whatsapp.net';
                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `🔞 @${msg.key.participant.split('@')[0]} fucked @${target.split('@')[0]} hard!`,
                        mentions: [msg.key.participant, target]
                    });
                } catch (err) {
                    console.error('Fuck command error:', err);
                }
                break;

            case 'horny':
                try {
                    const hornyLevel = Math.floor(Math.random() * 101);
                    let message = `🔥 @${msg.key.participant.split('@')[0]} is ${hornyLevel}% horny`;
                    
                    if (hornyLevel < 30) message += '\nPretty calm today!';
                    else if (hornyLevel < 70) message += '\nFeeling a bit frisky!';
                    else message += '\nBONK! Go to horny jail!';

                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: message,
                        mentions: [msg.key.participant]
                    });
                } catch (err) {
                    console.error('Horny command error:', err);
                }
                break;

            case 'cum':
                try {
                    const intensity = '💦'.repeat(Math.floor(Math.random() * 5) + 1);
                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `${intensity} @${msg.key.participant.split('@')[0]} just came!`,
                        mentions: [msg.key.participant]
                    });
                } catch (err) {
                    console.error('Cum command error:', err);
                }
                break;
        }
    }
};
