const config = {
    // Bot info
    name: '𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻',
    prefix: '!',
    owner: ['4915563151347'],

    // API Keys (using environment variables)
    openaiKey: process.env.OPENAI_API_KEY,

    // Database config
    dbName: 'bot.json',

    // Command settings
    cooldown: 3000, // milliseconds

    // Feature flags
    enableAI: true,
    enableDownloads: true,
    enableGroupManagement: true,

    // Limits
    maxFileSize: 100 * 1024 * 1024, // 100MB
    maxProcessingTime: 60000, // 60 seconds
};

module.exports = config;
