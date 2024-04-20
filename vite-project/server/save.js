// App.js - Utilisation des opérations CRUD avec Knex
// Manipuler (ajout des infos sur les fonctions)

const dbAnnonces = require('./models/Announces');
const dbDescriptionGames = require('./models/DescriptionGames');
const dbGames = require('./models/Games');
const dbMessages = require('./models/Messages');
const dbSeller = require('./models/Seller');
const dbUsers = require('./models/Users');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function main() {
  // Create users
  const user = [
    {
      username: "Kevin",
      
      
    },
  ]

  for (const category of categories) {
    const categoryId = await dbcategory.createCategory(category.name);
    for (const product of category.products) {
      await dbproduct.createProduct(product.name, product.quantity, product.price, categoryId[0]);
    }
  }

  const allCategories = await dbcategory.getAllCategories();
  console.log('Nous vous proposons dans notre carte Starbucks :', allCategories);

  clientOrders = product.name, product.quantity, product.price;

  const allOrders = await dborder.getAllOrders();
  console.log('Voici votre addition de votre commande :', allOrders);
}

main().catch(err => console.error(err));