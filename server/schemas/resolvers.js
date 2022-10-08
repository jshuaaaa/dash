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
  },
};

module.exports = resolvers;
