const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
  _id: ID
  username: String
  email: String
  items: [Item]
  }

  type Item {
    _id: ID
    title: String
    image: String
    username: String
    description: String
    createdAt: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    tradeItem: String
    acceptedFlag: Boolean
  }

  type Query {
    account: User
    users: [User]
    user(username: String!): User
    items(username: String): [Item]
    item(title: String!): Item
    comments: [Comment]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(title: String!, user: String!, description: String, image: String): Item
    addComment(itemId: ID!, commentText: String!): Item
  }
`;

module.exports = typeDefs;
