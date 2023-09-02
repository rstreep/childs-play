const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    spellingGameHighScore: Int
    animalGameHighScore: Int
    colorGameHighScore: Int
  }

 

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getAllUsers: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateSpellingGameHighScore(spellingGameHighScore: Int!): User
  }

`;

module.exports = typeDefs;