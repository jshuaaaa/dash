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
    itemsForMachine(id: Int!): Item
    machinesForUser(username: String!): Machine
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): User
  }
`;

module.exports = typeDefs;
