const express = require("express");
const router = require("./src/routes/api");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = new express();

//Security Middleware import....
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//Security Middleware implement.......
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

const limit = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limit);

//MongoDB Database connection.......
let URI = "mongodb://localhost:27017/Students";
let OPTION = { user: " ", pass: " " };

mongoose
  .connect(URI, { autoIndex: true })
  .then(() => {
    console.log("db is connected!");
  })
  .catch((error) => {
    console.log("db is not connected!");
    console.log(error);
    process.exit(1);
  });

app.use("/api", router);

//undefined Route......
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not found" });
});

module.exports = app;
