const seedUsers = require('./user-seed');
const seedItems = require('./item-seed');
const seedMachines = require('./machine-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----');

  await seedUsers();
  console.log('\n----- USERS SYNCED -----');

  await seedMachines();
  console.log('\n----- USERS SYNCED -----');

  await seedItems();
  console.log('\n----- USERS SYNCED -----');


  process.exit(0);
};

seedAll();