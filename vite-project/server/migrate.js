const knex = require('knex')(require('./models/knexfile')['development']);

async function createTable() {
    try {
        let exists = await knex.schema.hasTable('users');
        if (!exists) {
            await knex.schema.createTable('users', table => {
                table.increments('id');
                table.string('username');
                table.string('password');
            });
            console.log('Table users created!');
        } else {
            console.log('Table users already exist.');
        }

        exists = await knex.schema.hasTable('games');
        if (!exists) {
            await knex.schema.createTable('games', table => {
                table.increments('id').primary();
                table.string('name');
                table.integer('image');
                table.string('genre');
                table.string('description');
            });
            console.log('Table games created!.');
        } else {
            console.log('Table games already exist.');
        }

        exists = await knex.schema.hasTable('descriptionGames');
        if (!exists) {
            await knex.schema.createTable('descriptionGames', table => {
                table.increments('id').primary();
                table.string('name');
                table.string('image');
                table.decimal('price');
                table.string('descriptionGame');
                table.string('rank');
                table.decimal('numberPlayers');
            });
            console.log('Table descriptionGames created!.');
        } else {
            console.log('Table descriptionGames already exist.');
        }

        exists = await knex.schema.hasTable('Announces');
        if (!exists) {
            await knex.schema.createTable('Announces', table => {
                table.increments('id').primary();
                table.string('state');
                table.string('brand');
                table.string('model');
                table.integer('image');
                table.integer('game_id');
                table.foreign('game_id').references('id').inTable('games')
                table.integer('seller_id');
                table.foreign('seller_id').references('id').inTable('Seller')
            });
            console.log('Table Announces created!.');
        } else {
            console.log('Table Announces already exist.');
        }

        exists = await knex.schema.hasTable('Seller');
        if (!exists) {
            await knex.schema.createTable('Seller', table => {
                table.increments('id').primary();
                table.decimal('note');
            });
            console.log('Table Seller created!.');
        } else {
            console.log('Table Seller already exist.');
        }

        exists = await knex.schema.hasTable('Messages');
        if (!exists) {
            await knex.schema.createTable('Messages', table => {
                table.increments('id').primary();
                table.string('content');
                table.integer('annonce_id');
                table.foreign('annonce_id').references('id').inTable('Annonces');
                table.integer('sender_id');
                table.foreign('sender_id').references('id').inTable('Users');
                table.integer('recipient_id');
                table.foreign('recipient_id').references('id').inTable('Users');
                table.dateTime('sent_date').defaultTo(knex.fn.now())
            });
            console.log('Table Messages created!.');
        } else {
            console.log('Table Messages already exist.');
        }
    } catch (error) {
        console.error('Error creating the table:', error);
    } finally {
        await knex.destroy();
    }
}

createTable();