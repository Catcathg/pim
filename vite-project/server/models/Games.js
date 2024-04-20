// db.js - Fichier pour gérer les opérations CRUD avec Knex (créer les fonctions d'appel)
const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createGame(name, image, genre, description) {
    return await knex('Games').insert({ name, image, genre, description });
}

// Read
async function getAllGames() {
    return await knex.select().from('Games');
}

async function getGameById(id) {
    return await knex('Games').where({ id }).first();
}

// Update
async function updateGame(id, name, image, genre, description) {
    return await knex('Games').where({ id }).update({ name, image, genre, description });
}

// Delete
async function deletGame(id) {
    return await knex('Games').where({ id }).del();
}

module.exports = {
    createGame,
    getAllGames,
    getGameById,
    updateGame,
    deletGame,
};