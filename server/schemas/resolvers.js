const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.findAll()
    },

    
  },

  Mutation: {
    addUser: async (parent, { username, password }) => {
      return User.create({ username, password });
    },
  },
};

module.exports = resolvers;
