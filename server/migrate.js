const knex = require("./models/db");

(async () => {
    try {
        const usersTableExists = await knex.schema.hasTable("users");
        if (!usersTableExists) {
            await knex.schema.createTable("users", function (table) {
                table.increments("id").primary();
                table.string("username");
                table.string("password");
                table.string("rank")
            });
            console.log("Table 'users' created!");
        } else {
            console.log("Table 'users' already exists.");
        }

        const gamesTableExists = await knex.schema.hasTable("games");
        if (!gamesTableExists) {
            await knex.schema.createTable("games", function (table) {
                table.increments("id").primary();
                table.string("name");
                table.binary("image");
                table.string("genre");
                table.string("description");
                table.decimal("price");
            });
            console.log("Table 'games' created!");
        } else {
            console.log("Table 'games' already exists.");
        }

        const annoncesTableExists = await knex.schema.hasTable("annonces");
        if (!annoncesTableExists) {
            await knex.schema.createTable("annonces", function (table) {
                table.increments("id").primary();
                table.string("state");
                table.string("brand");
                table.string("model");
                table.binary("image");
                table.integer("game_id").unsigned().references("id").inTable("games");
                table.string("description");
            });
            console.log("Table 'annonces' created!");
        } else {
            console.log("Table 'annonces' already exists.");
        }

        const messagesTableExists = await knex.schema.hasTable("messages");
        if (!messagesTableExists) {
            await knex.schema.createTable("messages", function (table) {
                table.increments("id").primary();
                table.string("content");
                table.integer("annonce_id").unsigned().references("id").inTable("annonces");
                table.integer("sender_id").unsigned().references("id").inTable("users");
                table.integer("recipient_id").unsigned().references("id").inTable("users");
                table.dateTime("sent_date").defaultTo(knex.fn.now());
            });
            console.log("Table 'messages' created!");
        } else {
            console.log("Table 'messages' already exists.");
        }
    } catch (error) {
        console.error("Error creating tables:", error);
    } finally {
        await knex.destroy(); // Ferme la connexion à la base de données
    }
})();