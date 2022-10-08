const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: Int
    username: String
    password: String
    email: String
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): User
  }
`;

module.exports = typeDefs;
