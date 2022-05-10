const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add text value"],
  },
  isDone: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
