const studentsModel = require("../models/StuentsModel.js");

// create data........................
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
};

//read data ................
exports.readStudent = async (req, res) => {
  try {
    let Query = {};
    //let Projection = "Name Roll Class Remarks ";
    let data = await studentsModel.find(Query);

    res.status(201).json({ status: "Success", data: data });
  } catch (error) {
    res.status(401).json({ status: "fail", data: error });
  }
};

//update data ................
exports.updateStudent = async (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  let updateData = req.body;

  try {
    let data = await studentsModel.updateOne(query, updateData);
    res.status(201).json({ status: "Success", data: data });
  } catch (error) {
    res.status(401).json({ status: "fail", data: error });
  }
};

//delete...........................................
exports.deleteStudent = async (req, res) => {
  let id = req.params.id;
  let query = { _id: id };

  try {
    let data = await studentsModel.deleteOne(query);
    res.status(201).json({ status: "Success", data: data });
  } catch (error) {
    res.status(401).json({ status: "fail", data: error });
  }
};
