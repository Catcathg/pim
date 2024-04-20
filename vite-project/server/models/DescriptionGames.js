// db.js - Fichier pour gérer les opérations CRUD avec Knex (créer les fonctions d'appel)
const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createDescriptionGames(image, price, descriptionGame, rank, numberPlayers) {
    return await knex('DescriptionGames').insert({ image, price, descriptionGame, rank, numberPlayers });
}

// Read
async function getAllDescriptionGames() {
    return await knex.select().from('DescriptionGames');
}

async function getDescriptionGamesById(id) {
    return await knex('DescriptionGames').where({ id }).first();
}

// Update
async function updateDescriptionGames(id, image, price, descriptionGame, rank, numberPlayers) {
    return await knex('DescriptionGames').where({ id }).update({ image, price, descriptionGame, rank, numberPlayers });
}

// Delete
async function deletDescriptionGames(id) {
    return await knex('DescriptionGames').where({ id }).del();
}

module.exports = {
    createDescriptionGames,
    getAllDescriptionGames,
    getDescriptionGamesById,
    updateDescriptionGames,
    deletDescriptionGames,
};