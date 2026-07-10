const mongoose = require("mongoose");
console.log("project model loaded");
console.log("Model readyState:", mongoose.connection.readyState);
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);