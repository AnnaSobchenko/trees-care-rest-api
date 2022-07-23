const mongoose = require("mongoose");

const treesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "nikName is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  token: {
    type: String,
    default: null,
  },
  refreshToken: {
    type: String,
    default: null,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
  contacts: {
    type: Object,
    default: [],
  },
});

const Trees = mongoose.model("trees", treesSchema);

module.exports = {
    Trees,
};
