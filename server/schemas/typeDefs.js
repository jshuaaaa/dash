const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: Int
    username: String
    password: String
    email: String
  }

  type Machine {
    id: Int
    model: String
    revenue: Int
    ownedBy: String
  }

  type Item {
    id: Int
    item_name: String
    quantity: Int
    costPerUnit: Int
    insideOf: Int
  }

  type Query {
    users: [User]
    user(username: String!): User
    itemsForMachine(id: Int!): [Item]
    machinesForUser(username: String!): [Machine]
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): User
    addMachine(model: String, revenue: Int, ownedBy: String): Machine
    addItem(item_name: String, quantity: Int, costPerUnit: Int, insideOf: String): Item
    changeCostOfItem(_id: Int, costPerUnit: Int): Item
    changeQuantity(_id: Int, quantity: Int): Item
    deleteItem(_id: Int): Item
    deleteUser(username: String): User
    deleteMachine(_id: Int): Machine
  }
`;

module.exports = typeDefs;
