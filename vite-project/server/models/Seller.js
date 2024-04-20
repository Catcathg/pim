// db.js - Fichier pour gérer les opérations CRUD avec Knex (créer les fonctions d'appel)
const knex = require('knex')(require('./knexfile')['development']);

// Create
async function createSeller(note) {
    return await knex('Sellers').insert({ note });
}

// Read
async function getAllSellers() {
    return await knex.select().from('Sellers');
}

async function getSellerById(id) {
    return await knex('Sellers').where({ id }).first();
}

// Update
async function updateSeller(id, note) {
    return await knex('Sellers').where({ id }).update({ note });
}

// Delete
async function deletSeller(id) {
    return await knex('Sellers').where({ id }).del();
}

module.exports = {
    createSeller,
    getAllSellers,
    getSellerById,
    updateSeller,
    deletSeller,
};