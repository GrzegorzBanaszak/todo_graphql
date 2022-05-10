const Task = require("../models/taskModel.js");

const resolvers = {
  Query: {
    getTasks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
  },
  Mutation: {
    createTask: async (parent, args) => {
      const task = await Task.create({ text: args.input.text, isDone: false });
      return task;
    },
  },
};

module.exports = { resolvers };
