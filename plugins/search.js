const axios = require('axios');

module.exports = {
    commands: ['google', 'wiki'],
    
    async execute(sock, msg, args) {
        const command = msg.message?.conversation?.split(' ')[0].slice(1) || 
                       msg.message?.extendedTextMessage?.text?.split(' ')[0].slice(1);

        if (args.length === 0) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a search query.' });
            return;
        }

        const query = args.join(' ');

        switch (command) {
            case 'google':
                try {
                    const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
                        params: {
                            key: config.googleApiKey,
                            cx: config.googleSearchEngineId,
                            q: query
                        }
                    });

                    let result = '🔍 *Google Search Results*\n\n';
                    for (let i = 0; i < 5 && i < response.data.items.length; i++) {
                        const item = response.data.items[i];
                        result += `*${item.title}*\n${item.snippet}\n${item.link}\n\n`;
                    }

                    await sock.sendMessage(msg.key.remoteJid, { text: result });
                } catch (err) {
                    console.error('Google search error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to perform Google search.' });
                }
                break;

            case 'wiki':
                try {
                    const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
                    
                    const result = `📚 *Wikipedia*\n\n*${response.data.title}*\n\n${response.data.extract}`;
                    
                    await sock.sendMessage(msg.key.remoteJid, { text: result });
                } catch (err) {
                    console.error('Wikipedia search error:', err);
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Failed to find Wikipedia article.' });
                }
                break;
        }
    }
};
