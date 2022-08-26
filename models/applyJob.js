const { timeStamp } = require("console");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applyNewJobSchema = new Schema(
  {
    name: {
      type: String,
    },
    pNum: { type: String },
    email: { type: String },
    expertise: { type: String },
    jTitle: { type: String },
    files: [Object],
  },
  { timeStamp: true }
);

module.exports = mongoose.model("jobApply", applyNewJobSchema);
