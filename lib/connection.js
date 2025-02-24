const { getDatabase, saveDatabase } = require('./database');

async function updateGroupMetadata(sock, jid) {
    try {
        const metadata = await sock.groupMetadata(jid);
        const db = getDatabase();

        db.groups[jid] = {
            ...db.groups[jid],
            metadata,
            lastUpdate: Date.now()
        };

        await saveDatabase();
        return metadata;
    } catch (err) {
        console.error('Error updating group metadata:', err);
        return null;
    }
}

async function isAdmin(sock, groupId, participantId) {
    try {
        const metadata = await sock.groupMetadata(groupId);
        const participant = metadata.participants.find(p => p.id === participantId);
        return participant?.admin === 'admin' || participant?.admin === 'superadmin';
    } catch {
        return false;
    }
}

module.exports = {
    updateGroupMetadata,
    isAdmin
};