const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String, unique: true },
});

module.exports = mongoose.model("user", userSchema);
