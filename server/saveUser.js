const {
  createUser,
  getAllUsers,
} = require('../server/models/Users');

async function main() {
  try {
    const newUser = {
      username: "Kevin",
      password: "Kevin1",
      rank: "Diamant",
    };
    
    const insertedUser = await createUser(newUser.username, newUser.password, newUser.rank);
    console.log('Utilisateur inséré avec succès:', insertedUser);
    
    const allUsers = await getAllUsers();
    console.log('Voici tous les utilisateurs:', allUsers);
    
  } catch (error) {
    console.error('Une erreur s\'est produite:', error);
  }
}

main();
