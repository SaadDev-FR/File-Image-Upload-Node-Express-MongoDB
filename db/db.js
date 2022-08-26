const { appendFile } = require("fs");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://saad:saad@cluster0.tcp2t.mongodb.net/tapeball")
  .then(() => console.log("DBconnection Successful!"))
  .catch((err) => {
    console.log(err);
  });
