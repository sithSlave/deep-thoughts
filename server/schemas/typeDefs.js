const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type Reaction {
      _id: ID
      reactionBody: String
      createdAt: String
      username: String
   }

   type Thought {
      _id: ID
      thoughtText: String
      createdAt: String
      username: String
      reactionCount: Int
      reactions: [Reaction]
   }

   type User {
      _id: ID
      username: String
      email: String
      friendCount: Int
      thoughts: [Thought]
      friends: [User]
   }

   type Query {
      users: [User]
      user(username: String!): User
      thoughts(username: String): [Thought]
      thought(_id: ID!): Thought
   }

   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
   }

   type Auth {
      token: ID!
      user: User
   }
`;

module.exports = typeDefs;