const { timeStamp } = require("console");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applyInternSchema = new Schema(
  {
    name: {
      type: String,
    },
    pNum: { type: String },
    email: { type: String },
    jTitle: { type: String },
    expertise: { type: String },
    files: [Object],
  },
  { timeStamp: true }
);

module.exports = mongoose.model("internApply", applyInternSchema);
