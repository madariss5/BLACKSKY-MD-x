const config = require('../config');
const { getDatabase } = require('./database');
const { loadPlugins } = require('./utils');

const plugins = loadPlugins();
const cooldowns = new Map();

async function messageHandler(sock, msg) {
    if (!msg.message || msg.key.fromMe) return;

    const db = getDatabase();

    // Check if user is banned
    if (db.banned.includes(msg.key.participant)) {
        console.log(`Blocked message from banned user: ${msg.key.participant}`);
        return;
    }

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
                db.stats.commands++;
                await saveDatabase();

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

async function saveDatabase() {
    //Implementation to save the database.  This will depend on your database library.
    //Example using a hypothetical 'db.save()' method:
    await db.save();

    //Example using JSON file saving:
    //const fs = require('node:fs/promises');
    //await fs.writeFile('./database.json', JSON.stringify(db, null, 2));

}

module.exports = {
    messageHandler
};