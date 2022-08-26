const team = require("../models/team");
const jobDetailsall = require("../models/jobDetails");
const jobApplicants = require("../models/applyJob");
const InternApply = require("../models/applyIntern");
const internModel = require("../models/intern");
const contactus = require("../models/contactUS");
const user = require("../models/user");
const bcrypt = require("bcryptjs");
const SECRET_KEY = "6E2ECSV5112";
const jwt = require("jsonwebtoken");
const { match } = require("assert");

// admin registration
const adminSigUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await user.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await user({
      email: email,
      password: password,
    }).save();

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(200).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Somethimg went wrong" });
  }
};

const adminLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await user.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User Not Found " });
    }
    const matchPassword = await user.findOne({ password: password });
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign(
      { email: existingUser.email, password: existingUser._id },
      SECRET_KEY
    );
    res.status(200).json({ user: existingUser, token: token });
  } catch (error) {
    return res.status(500).json({ message: "Somethimg went wrong" });
  }
};
// admin will upload team data
const newJob = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {};
      filesArray.push(file);
    });

    const newJobs = new jobDetailsall({
      jobTitle: req.body.jobTitle,
      industry: req.body.industry,
      functionalArea: req.body.functionalArea,
      totalPositions: req.body.totalPositions,
      jobShift: req.body.jobShift,
      jobType: req.body.jobType,
      jobLocation: req.body.jobLocation,
      gender: req.body.gender,
      minimumEducation: req.body.minimumEducation,
      careerLevel: req.body.careerLevel,
      minimumExpertise: req.body.minimumExpertise,
      applyBefore: req.body.applyBefore,
      postingDate: req.body.postingDate,
      jobDesc: req.body.jobDesc,
      extraKnowledge: req.body.extraKnowledge,
      files: filesArray,
    });
    await newJobs.save();
    res.status(201).json("File created Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const internPosition = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: element.size, //0.00
      };
      filesArray.push(file);
    });

    const internData = new internModel({
      jobTitle: req.body.jobTitle,
      industry: req.body.industry,
      functionalArea: req.body.functionalArea,
      totalPositions: req.body.totalPositions,
      jobShift: req.body.jobShift,
      jobType: req.body.jobType,
      jobLocation: req.body.jobLocation,
      gender: req.body.gender,
      minimumEducation: req.body.minimumEducation,
      careerLevel: req.body.careerLevel,
      minimumExpertise: req.body.minimumExpertise,
      applyBefore: req.body.applyBefore,
      postingDate: req.body.postingDate,
      jobDesc: req.body.jobDesc,
      extraKnowledge: req.body.extraKnowledge,
      files: filesArray,
    });
    await internData.save();
    res.status(201).json("File created Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// applicant will apply for jobs
const applyJob = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: element.size, //0.00
      };
      filesArray.push(file);
    });

    const applyNewJob = new jobApplicants({
      name: req.body.name,
      pNum: req.body.pNum,
      email: req.body.email,
      expertise: req.body.expertise,
      jTitle: req.body.jTitle,
      files: filesArray,
    });
    await applyNewJob.save();
    res.status(201).json("File created Successfully");
  } catch (error) {
    res.status(400).json("Please Fill the Fields");
  }
};
// internee will apply for jobs
const internApply = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: element.size, //0.00
      };
      filesArray.push(file);
    });

    const applyIntern = new InternApply({
      name: req.body.name,
      pNum: req.body.pNum,
      email: req.body.email,
      expertise: req.body.expertise,
      jTitle: req.body.jTitle,
      files: filesArray,
    });
    await applyIntern.save();
    res.status(201).json("File created Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// admin will upload the team
const ourTeam = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: element.size, //0.00
      };
      filesArray.push(file);
    });

    const teamData = new team({
      name: req.body.name,
      designation: req.body.designation,
      files: filesArray,
    });
    await teamData.save();
    res.status(201).json("File created Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const contactUS = async (req, res, next) => {
  try {
    const contactData = new contactus({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    await contactData.save();
    res.status(201).json("File created Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// get team data
const GetJobsAdvert = async (req, res, next) => {
  try {
    const jobsAdvertData = await jobDetailsall.find();
    res.status(200).json(jobsAdvertData);
  } catch (err) {
    res.status(500).json(err);
  }
};
// get intern Advert
const GetInternAdvert = async (req, res, next) => {
  try {
    const internAdvertData = await internModel.find();
    res.status(200).json(internAdvertData);
  } catch (err) {
    res.status(500).json(err);
  }
};
const GetInternApplicant = async (req, res, next) => {
  try {
    const internAPllicantData = await InternApply.find();
    res.status(200).json(internAPllicantData);
  } catch (err) {
    res.status(500).json(err);
  }
};
const GetJobsApplicant = async (req, res, next) => {
  try {
    const employeeAPllicantData = await jobApplicants.find();
    res.status(200).json(employeeAPllicantData);
  } catch (err) {
    res.status(500).json(err);
  }
};
// get team data
const GetTeam = async (req, res, next) => {
  try {
    const teamData = await team.find();
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
};
const GetContactData = async (req, res, next) => {
  try {
    const ContactUsdata = await contactus.find();
    res.status(200).json(ContactUsdata);
  } catch (err) {
    res.status(500).json(err);
  }
};

// const fileSizeFormater = (bytes, decimal) => {
//   if (bytes === 0) {
//     return "0 Bytes";
//   } else {
//     const dm = decimal || 2;
//     const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
//     const index = Math.floor(Math.log(bytes) / Math.log(1000));
//     return (
//       parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) +
//       "-" +
//       sizes[index]
//     );
//   }
// };

module.exports = {
  adminSigUp,
  adminLogin,
  newJob,
  internPosition,
  applyJob,
  internApply,
  ourTeam,
  GetTeam,
  GetJobsAdvert,
  GetInternAdvert,
  GetInternApplicant,
  GetJobsApplicant,
  contactUS,
  GetContactData,
};
