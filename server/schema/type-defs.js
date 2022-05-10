const { gql } = require("apollo-server");

const typeDefs = gql`
  type Task {
    _id: String!
    text: String!
    isDone: Boolean
  }

  type Query {
    getTasks: [Task!]!
  }
`;

module.exports = { typeDefs };
