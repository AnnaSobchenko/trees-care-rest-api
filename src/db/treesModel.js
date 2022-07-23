const mongoose = require("mongoose");

const treesSchema = new mongoose.Schema({
  radius: {
    type: String,
    required: [true, "radius is required"],
  },
  age: {
    type: String,
    required: [true, "age is required"],
  },
  kindOfTree: {
    type: String,
    required: [true, "kindOfTree is required"],
  },
  condition: {
    type: String,
    required: [true, "condition is required"],
  },
  registrationNumber: {
    type: String,
    required: [true, "registrationNumber is required"],
  },
  necessaryWorks: {
    type: Object,
    default: [],
  },
});

const Trees = mongoose.model("trees", treesSchema);

module.exports = {
  Trees,
};
