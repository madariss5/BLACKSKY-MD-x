const config = require('../config');
const { getDatabase } = require('./database');
const { loadPlugins } = require('./utils');

const plugins = loadPlugins();
const cooldowns = new Map();

async function messageHandler(sock, msg) {
    if (!msg.message || msg.key.fromMe) return;
    
    const db = getDatabase();
    const content = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
    
    // Check if message starts with prefix
    if (!content.startsWith(config.prefix)) return;
    
    const command = content.slice(config.prefix.length).trim().split(' ')[0].toLowerCase();
    const args = content.slice(config.prefix.length + command.length).trim().split(' ');
    
    // Find matching plugin command
    for (const plugin of plugins) {
        if (plugin.commands.includes(command)) {
            // Cooldown check
            const cooldownKey = `${msg.key.remoteJid}_${command}`;
            if (cooldowns.has(cooldownKey)) {
                const timeLeft = cooldowns.get(cooldownKey) - Date.now();
                if (timeLeft > 0) {
                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `Please wait ${Math.ceil(timeLeft/1000)} seconds before using this command again.`
                    });
                    return;
                }
            }
            
            try {
                await plugin.execute(sock, msg, args);
                cooldowns.set(cooldownKey, Date.now() + config.cooldown);
                
                // Update stats
                db.data.stats.commands++;
                await db.write();
                
                // Clear cooldown after timeout
                setTimeout(() => cooldowns.delete(cooldownKey), config.cooldown);
            } catch (err) {
                console.error(`Error executing command ${command}:`, err);
                await sock.sendMessage(msg.key.remoteJid, { 
                    text: 'An error occurred while executing this command.'
                });
            }
            break;
        }
    }
}

module.exports = {
    messageHandler
};
