const knex = require("./db");

function register(userData) {
    //Check if user already exists
    if (knes("users").where({username: userData.username}).first()) {
        throw new Error ("Username already exists");
    }
    return knex ("users").insert(userData);
}

function login(credentials) {
    return knex("users").where(credentials).first();
}

mudule.exports = {
    register,
    login,
};