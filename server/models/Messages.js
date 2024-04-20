// db.js - Fichier pour gérer les opérations CRUD avec Knex (créer les fonctions d'appel)
const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createMessage(shipper, user) {
    return await knex('Messages').insert({ shipper, user });
}

// Read
async function getAllMessages() {
    return await knex.select().from('Messages');
}

async function getMessageById(id) {
    return await knex('Messages').where({ id }).first();
}

// Update
async function updateMessage(id, shipper, user) {
    return await knex('Messages').where({ id }).update({ shipper, user });
}

// Delete
async function deletMessage(id) {
    return await knex('Messages').where({ id }).del();
}

module.exports = {
    createMessage,
    getAllMessages,
    getMessageById,
    updateMessage,
    deletMessage,
};