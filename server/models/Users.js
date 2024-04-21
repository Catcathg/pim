const knex = require("./db");

async function register(userData) {
  if (await knex("users").where({ username: userData.username }).first()) {
    throw new Error("Username already exists");
  }
  const [id] = await knex("users").insert(userData);
  return getUserById(id);
}

function login(credentials) {
  return knex("users").where(credentials).first();
}

function getUserById(id) {
  return knex("users").where({ id }).first();
}

// Create
async function createUser(username, password, rank) {
  const [id] = await knex('users').insert({ username, password, rank });
  return getUserById(id);
}

// Read
async function getAllUsers() {
  return await knex.select().from('users');
}

module.exports = {
  register,
  login,
  getUserById,
  createUser,
  getAllUsers,
};
