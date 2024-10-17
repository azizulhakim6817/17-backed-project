const mongoose = require("mongoose");

const DataSchema = mongoose.model({
  Name: String,
  Roll: String,
  Class: String,
  Remarks: String,
});

const studentsModel = mongoose.model("Studetnts", DataSchema);

module.exports = studentsModel;
