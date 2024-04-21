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
    
<<<<<<< Updated upstream
=======
    //const userIdToUpdate = 1;
    //const updatedUser = await updateUser(userIdToUpdate, "NouveauNom", "NouveauMotDePasse");
    //console.log('Utilisateur mis à jour avec succès:', updatedUser);
    
    const userIdToDelete = 2;
    await deleteUser(userIdToDelete);
    console.log('Utilisateur supprimé avec succès');
>>>>>>> Stashed changes
  } catch (error) {
    console.error('Une erreur s\'est produite:', error);
  }
}

main();
