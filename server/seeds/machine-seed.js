const { Machine } = require('../models') 

const userData = [
  {
    id: 1,
    model: 'test 9000',
    ownedBy: "beanman03"
  },

];

const seedMachines = () => Machine.bulkCreate(userData);

module.exports = seedMachines