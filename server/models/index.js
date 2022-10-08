// const Traveller = require('./Traveller');
// const Location = require('./User');
// const Trip = require('./Trip');
const User = require("./User")
const Machine = require("./Machine")
const Item = require("./Item")

Machine.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: User,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'ownedBy'
});


Item.belongsToMany(Machine, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Machine,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'insideOf'
  });


 module.exports = { User, Machine, Item };
