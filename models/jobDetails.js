const { timeStamp } = require("console");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobHistorySchema = new Schema(
  {
    jobTitle: {
      type: String,
    },
    industry: {
      type: String,
    },
    functionalArea: {
      type: String,
    },
    totalPositions: {
      type: String,
    },
    jobShift: {
      type: String,
    },
    jobType: { type: String },
    jobLocation: { type: String },
    gender: { type: String },
    minimumEducation: { type: String },
    careerLevel: { type: String },
    minimumExpertise: { type: String },
    applyBefore: { type: String },
    postingDate: { type: String },
    jobDesc: { type: String },
    extraKnowledge: { type: String },
    files: [Object],
  },
  { timeStamp: true }
);

module.exports = mongoose.model("newJobs", jobHistorySchema);
