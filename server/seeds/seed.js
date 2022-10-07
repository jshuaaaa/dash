const seedUsers = require('./user-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----');

  await seedUsers();
  console.log('\n----- USERS SYNCED -----');


  process.exit(0);
};

seedAll();