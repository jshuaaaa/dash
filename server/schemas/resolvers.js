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
    changeCostOfItem: async (parent, { _id, costPerUnit}) => {
      await Item.update(
        {
          costPerUnit: costPerUnit
        },
        {
          where: {id: _id}
        }
      )
      return Item.findOne({where:{id:_id}})
    },
    changeQuantity: async (parent, { _id, quantity}) => {
      await Item.update(
        {
          quantity: quantity
        },
        {
          where: {id: _id}
        }
      )
      return Item.findOne({where:{id:_id}})
    },
    deleteItem: async (parent, {_id}) => {
      await Item.destroy({where : {id: _id}})
      return 'item deleted'
    },
    deleteMachine: async (parent, {_id}) => {
      await Item.destroy({where: {insideOf: _id}})
      await Machine.destroy({where : {id: _id}})
      return 'Machine deleted'
    } ,
    deleteUser: async (parent, {username}) => {
      await Item.destroy({where: {ownedBy: username}})
      await Machine.destroy({where: {ownedBy: username} })
      await User.destroy({where : {username: username}})
      return 'User deleted'
    }  
    
  },
};

module.exports = resolvers;
