const fs = require('fs').promises;
const path = require('path');
const config = require('../config');

let db = null;

async function initDatabase() {
    try {
        const dbPath = path.join(__dirname, '..', config.dbName);

        // Try to read existing database
        try {
            const data = await fs.readFile(dbPath, 'utf8');
            db = JSON.parse(data);
            // Add banned users array if it doesn't exist
            if (!db.banned) {
                db.banned = [];
                await saveDatabase();
            }
            // Add warnings object if it doesn't exist
            if (!db.warnings) {
                db.warnings = {};
                await saveDatabase();
            }
        } catch (err) {
            // Initialize new database if file doesn't exist
            db = {
                users: {},
                groups: {},
                settings: {},
                banned: [], // Array to store banned user IDs
                warnings: {}, // Object to store warnings: { groupId: { userId: warningCount } }
                stats: {
                    commands: 0,
                    messages: 0
                }
            };
            // Create initial database file
            await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
        }

        return db;
    } catch (err) {
        console.error('Database initialization error:', err);
        throw err;
    }
}

async function saveDatabase() {
    if (!db) {
        throw new Error('Database not initialized');
    }

    const dbPath = path.join(__dirname, '..', config.dbName);
    await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
}

function getDatabase() {
    if (!db) {
        throw new Error('Database not initialized');
    }
    return db;
}

module.exports = {
    initDatabase,
    getDatabase,
    saveDatabase
};