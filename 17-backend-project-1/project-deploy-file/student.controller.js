/* const studentsModel = require("../models/user.js");

// create data
exports.InsertStudent = async (req, res) => {
  try {
    const studentData = req.body; 
    const newStudent = await studentsModel.create(studentData);
    res.status(201).json({ status: "success", data: newStudent });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "An error occurred while inserting the student",
    });
  }
}; */

const studentsModel = require("../src/controllers/studentControllers.js");

exports.InsertStudent = (req, res) => {
  let reqBody = req.body;

  studentsModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(201).json({ status: "succes", data: data });
    }
  });
};
