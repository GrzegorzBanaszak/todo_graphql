const Task = require("../models/taskModel.js");

const resolvers = {
  Query: {
    getTasks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
  },
};

module.exports = { resolvers };
