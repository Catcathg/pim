// db.js - Fichier pour gérer les opérations CRUD avec Knex (créer les fonctions d'appel)
const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createAnnounce(state, brand, model, image, description) {
    return await knex('Annonunces').insert({ state, brand, model, image, description });
}

// Read
async function getAllAnnounces() {
    return await knex.select().from('Announces');
}

async function getAnnounceById(id) {
    return await knex('Announces').where({ id }).first();
}

// Update
async function updateAnnounce(id, brand, model, image) {
    return await knex('Announces').where({ id }).update({ brand, model, image });
}

// Delete
async function deletAnnounce(id) {
    return await knex('Announces').where({ id }).del();
}

module.exports = {
    createAnnounce,
    getAllAnnounces,
    getAnnounceById,
    updateAnnounce,
    deletAnnounce,
};