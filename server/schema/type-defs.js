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

  input CreateTaskInput {
    text: String!
  }
  type Mutation {
    createTask(input: CreateTaskInput): Task
  }
`;

module.exports = { typeDefs };
