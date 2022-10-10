const { Item } = require('../models') 

const userData = [
  {
    id: 1,
    item_name: 'Apple',
    quantity: 50,
    costPerUnit: 1,
    insideOf: 1,
    ownedBy: "beanman03"
  },

];

const seedItems = () => Item.bulkCreate(userData);

module.exports = seedItems