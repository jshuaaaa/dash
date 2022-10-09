const { User, Machine, Item } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.findAll()
    },

    machinesForUser: async (parent, {username}) => {
      return Machine.findAll({where: {ownedBy: username}})
    },

    itemsForMachine: async (parent, {id}) => {
      return Item.findAll({where: {insideOf: id}})
    },

    user: async(parent, {username}) => {
      return User.findOne({where: {
        username: username
      }})
    }

    
  },

  Mutation: {
    addUser: async (parent, { username, password, email }) => {
      return User.create({ username, password, email });
    },
    addMachine: async (parent, { model,revenue,ownedBy }) => {
      return Machine.create({ model,revenue,ownedBy });
    },
    addItem: async (parent, { item_name,quantity,costPerUnit,insideOf }) => {
      return Item.create({ item_name,quantity,costPerUnit,insideOf });
    },
    changeCostOfItem: async (parent, { id, costPerUnit}) => {
      return Item.update(
        {
          costPerUnit: costPerUnit
        },
        {
          where: {id: id}
        }
      )
    },
    changeQuantity: async (parent, { id, quantity}) => {
      return Item.update(
        {
          quantity: quantity
        },
        {
          where: {id: id}
        }
      )
    },
  },
};

module.exports = resolvers;
