const mongoose = require("mongoose");

const stuenetSchema = mongoose.Schema(
  {
    Name: { type: String },
    Roll: { type: String },
    Class: { type: String },
  },
  { versionKey: false }
);
const studentsModel = mongoose.model("userStudentsID", stuenetSchema);
module.exports = studentsModel;
