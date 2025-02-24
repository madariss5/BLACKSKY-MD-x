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
            // Add users leveling data if it doesn't exist
            if (!db.users) {
                db.users = {};
                await saveDatabase();
            }
        } catch (err) {
            // Initialize new database if file doesn't exist
            db = {
                users: {}, // Store user data: { userId: { xp, level, messages, etc } }
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

// Helper function to get user data, creating if not exists
function getUserData(userId) {
    if (!db.users[userId]) {
        db.users[userId] = {
            xp: 0,
            level: 1,
            messages: 0,
            commandsUsed: 0,
            lastDaily: 0,
            profile: {
                bio: '',
                status: 'Member',
                registered: Date.now()
            }
        };
    }
    return db.users[userId];
}

// Calculate XP needed for next level
function getXPNeeded(level) {
    return Math.floor(100 * Math.pow(1.5, level - 1));
}

// Add XP to user and handle level ups
async function addUserXP(userId, xpAmount) {
    const userData = getUserData(userId);
    userData.xp += xpAmount;

    const xpNeeded = getXPNeeded(userData.level);
    if (userData.xp >= xpNeeded) {
        userData.level++;
        userData.xp -= xpNeeded;
        await saveDatabase();
        return true; // Indicates level up
    }

    await saveDatabase();
    return false; // No level up
}

module.exports = {
    initDatabase,
    getDatabase,
    saveDatabase,
    getUserData,
    getXPNeeded,
    addUserXP
};