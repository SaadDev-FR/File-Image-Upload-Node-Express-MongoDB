const { timeStamp } = require("console");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    name: {
      type: String,
    },
    designation: { type: String },
    // news: {
    //   type: String,
    // },
    files: [Object],
  },
  { timeStamp: true }
);

module.exports = mongoose.model("team", teamSchema);
