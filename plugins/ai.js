const OpenAI = require('openai');
const config = require('../config');

const openai = new OpenAI({
    apiKey: config.openaiKey
});

module.exports = {
    commands: ['ai', 'ask', 'gpt'],

    async execute(sock, msg, args) {
        if (!config.enableAI) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'AI features are currently disabled.' });
            return;
        }

        if (args.length === 0) {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a question or prompt.' });
            return;
        }

        const prompt = args.join(' ');

        try {
            const response = await openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                prompt: prompt,
                max_tokens: 150
            });

            await sock.sendMessage(msg.key.remoteJid, { 
                text: response.choices[0].text.trim()
            });
        } catch (err) {
            console.error('OpenAI API Error:', err);
            await sock.sendMessage(msg.key.remoteJid, { 
                text: 'Sorry, I encountered an error while processing your request.'
            });
        }
    }
};