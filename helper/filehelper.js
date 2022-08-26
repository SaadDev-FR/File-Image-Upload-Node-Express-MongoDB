const multer = require("multer");
const path = require("path");

// for storing image in storage using multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

// file filter mean image extension type jpg/png/jpeg
const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "images/png" &&
    file.mimetype === "images/jpg" &&
    file.mimetype === "images/jpeg" &&
    file.mimetype === "video/mp4"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    // return cb(new Error("only png,jpg,jpeg,mp4 format "));
  }
};

// create instance

const upload = multer({ storage: storage, filefilter: filefilter });

// export the module

module.exports = { upload };
