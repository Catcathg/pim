const knex = require("./db");

function createArticle(articleData){
    return knex("articles").insert(articleData);
}

function getArticles() {
    return knex("articles").select();
}

