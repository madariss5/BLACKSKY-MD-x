const fs = require('fs');
const path = require('path');

function loadPlugins() {
    const plugins = [];
    const pluginsDir = path.join(__dirname, '../plugins');
    
    const files = fs.readdirSync(pluginsDir)
        .filter(file => file.endsWith('.js'));
        
    for (const file of files) {
        try {
            const plugin = require(path.join(pluginsDir, file));
            plugins.push(plugin);
        } catch (err) {
            console.error(`Error loading plugin ${file}:`, err);
        }
    }
    
    return plugins;
}

async function downloadMedia(msg) {
    try {
        const stream = await msg.download();
        const buffer = Buffer.from(stream);
        return buffer;
    } catch (err) {
        console.error('Error downloading media:', err);
        return null;
    }
}

function formatSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

module.exports = {
    loadPlugins,
    downloadMedia,
    formatSize
};
