const express = require("express");
const { upload } = require("../helper/filehelper");
const {
  newJob,
  internPosition,
  applyJob,
  adminSigUp,
  adminLogin,
  ourTeam,
  GetTeam,
  GetJobsAdvert,
  GetInternAdvert,
  internApply,
  GetInternApplicant,
  GetJobsApplicant,
  contactUS,
  GetContactData,
} = require("../../backend/controllors/fileController");
const { Router } = require("express");
const router = express.Router();
router.post("/register", adminSigUp);
router.post("/login", adminLogin);
router.post("/newJob", upload.array("files"), newJob);
router.post("/intern", upload.array("files"), internPosition);
router.post("/applyJob", upload.array("files"), applyJob);
router.post("/applyIntern", upload.array("files"), internApply);
router.post("/team", upload.array("files"), ourTeam);
router.get("/GetTeam", GetTeam);
router.get("/GetJobsAdvert", GetJobsAdvert);
router.get("/GetInternAdvert", GetInternAdvert);
router.get("/GetInternApplicant", GetInternApplicant);
router.get("/GetJobApplicant", upload.array("files"), GetJobsApplicant);
router.post("/contactUsData", contactUS);
router.get("/GetcontactUs", GetContactData);
module.exports = {
  routes: router,
};
