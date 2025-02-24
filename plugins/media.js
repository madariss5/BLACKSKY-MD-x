const { downloadMedia } = require('../lib/utils');

module.exports = {
    commands: ['sticker', 'toimg'],
    
    async execute(sock, msg, args) {
        const command = msg.message?.conversation?.split(' ')[0].slice(1) || 
                       msg.message?.extendedTextMessage?.text?.split(' ')[0].slice(1);

        switch (command) {
            case 'sticker':
                try {
                    const quotedMsg = msg.message.extendedTextMessage?.contextInfo?.quotedMessage;
                    if (!quotedMsg?.imageMessage) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Please reply to an image.' });
                        return;
                    }

                    const media = await downloadMedia(quotedMsg.imageMessage);
                    if (!media) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download image.' });
                        return;
                    }

                    await sock.sendMessage(msg.key.remoteJid, { 
                        sticker: media,
                        mimetype: 'image/webp'
                    });
                } catch (err) {
                    console.error('Sticker creation error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to create sticker.' });
                }
                break;

            case 'toimg':
                try {
                    const quotedMsg = msg.message.extendedTextMessage?.contextInfo?.quotedMessage;
                    if (!quotedMsg?.stickerMessage) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Please reply to a sticker.' });
                        return;
                    }

                    const media = await downloadMedia(quotedMsg.stickerMessage);
                    if (!media) {
                        await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to download sticker.' });
                        return;
                    }

                    await sock.sendMessage(msg.key.remoteJid, { 
                        image: media,
                        caption: 'Here\'s your image!'
                    });
                } catch (err) {
                    console.error('Sticker to image error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to convert sticker to image.' });
                }
                break;
        }
    }
};
