const mongoose = require("mongoose");

const ToDoSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ToDoTask", ToDoSchema);
