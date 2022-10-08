// const Traveller = require('./Traveller');
// const Location = require('./User');
// const Trip = require('./Trip');
const User = require("./User")
const Machine = require("./Machine")
const Item = require("./Item")

Machine.belongsTo(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: User,
    unique: false
  },
  // Define an alias for when data is retrieved
  foreignKey: 'ownedBy',
  through: "machines_owned_by"
});


Item.belongsTo(Machine, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Machine,
      unique: false
    },
    // Define an alias for when data is retrieved
  });

  Machine.hasMany(Item)


 module.exports = { User, Machine, Item };
