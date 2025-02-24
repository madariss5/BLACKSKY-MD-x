const ytdl = require('ytdl-core');
const config = require('../config');
const { formatSize } = require('../lib/utils');

module.exports = {
    commands: ['ytdl', 'yt', 'download'],
    
    async execute(sock, msg, args) {
        if (!config.enableDownloads) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Download features are currently disabled.' });
            return;
        }

        if (args.length === 0) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a YouTube URL.' });
            return;
        }

        const url = args[0];
        
        try {
            if (!ytdl.validateURL(url)) {
                await sock.sendMessage(msg.key.remoteJid, { text: 'Invalid YouTube URL.' });
                return;
            }

            const info = await ytdl.getInfo(url);
            const format = ytdl.chooseFormat(info.formats, { quality: '18' });
            
            if (format.contentLength > config.maxFileSize) {
                await sock.sendMessage(msg.key.remoteJid, { 
                    text: `File size (${formatSize(format.contentLength)}) exceeds maximum limit of ${formatSize(config.maxFileSize)}.`
                });
                return;
            }

            await sock.sendMessage(msg.key.remoteJid, { 
                text: 'Starting download, please wait...'
            });

            const stream = ytdl(url, { format: format });
            const buffer = [];

            stream.on('data', chunk => buffer.push(chunk));
            
            stream.on('end', async () => {
                const videoBuffer = Buffer.concat(buffer);
                await sock.sendMessage(msg.key.remoteJid, { 
                    video: videoBuffer,
                    caption: info.videoDetails.title
                });
            });
        } catch (err) {
            console.error('YouTube download error:', err);
            await sock.sendMessage(msg.key.remoteJid, { 
                text: 'An error occurred while downloading the video.'
            });
        }
    }
};
