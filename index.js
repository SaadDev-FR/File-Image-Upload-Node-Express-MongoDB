const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
mongoose = require("mongoose");

require("./db/db");

const fileRoute = require("../backend/routes/fileRoute");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", fileRoute.routes);
app.listen(8000, () => {
  console.log("Backend server is running!");
});
