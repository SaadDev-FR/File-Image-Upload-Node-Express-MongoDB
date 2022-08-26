const { timeStamp } = require("console");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: { type: String },
    message: { type: String },
    // news: {
    //   type: String,
    // }
  },
  { timeStamp: true }
);

module.exports = mongoose.model("contact", contactSchema);
