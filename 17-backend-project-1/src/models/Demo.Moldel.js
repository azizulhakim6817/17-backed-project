const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  Name: { type: String },
  Roll: { type: Number },
  Class: { type: String },
  Remarkes: { type: String, default: "No Remarks" },
  Adult: { type: boolean },
  comment: [],
  details: {},
  dob: Date,
});

const ModelSchema = mongoose.model("users", DataSchema);

export default ModelSchema;
