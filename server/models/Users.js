// db.js - Fichier pour gérer les opérations CRUD avec Knex (créer les fonctions d'appel)
const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createUser(username, password, rank) {
    const [id] = await knex('Users').insert({ username, password, rank });
    return getUserById(id)
}

// Read
async function getAllUsers() {
    return await knex.select().from('Users');
}

async function getUserById(id) {
    return await knex('Users').where({ id }).first();
}

// Update
async function updateUser(id, username, password, rank) {
    return await knex('Users').where({ id }).update({ username, password, rank });
}

// Delete
async function deletUser(id) {
    return await knex('Users').where({ id }).del();
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deletUser,
};