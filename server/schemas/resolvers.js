const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.findAll()
    },

    user: async(parent, {username}) => {
      console.log(username)
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
