import TasksModel from "../model/TaskModel.js";
import mongoose from "mongoose";

//create............................................
export const CreateTask = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let requestBody = req.body;
    requestBody.user_id = user_id;

    await TasksModel.create(requestBody);
    return res.json({ status: "success", message: "Task successfully" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

//update...................................................
export const UpdateTaskStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let stause = req.params.status;
    let user_id = req.headers["user_id"];

    await TasksModel.updateOne(
      { _id: id, user_id: user_id },
      { status: stause }
    );
    return res.json({ status: "success", message: "Task Update successfully" });
  } catch (error) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

//detials find.............................................
export const TaskListByStatus = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let status = req.params.status;

    let data = await TasksModel.find({ user_id: user_id, status: status });
    return res.json({
      status: "success",
      message: "Task List",
      data: data,
    });
  } catch (error) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

//Delete.................................................
export const DeleteTask = async (req, res) => {
  try {
    let id = req.params.id;
    let user_id = req.headers["user_id"];

    await TasksModel.deleteOne({ _id: id, user_id: user_id });
    return res.json({ status: "successs", message: "Task Deleted" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

//counts.......................................................
export const CountTask = async (req, res) => {
  try {
    let ObjectId = mongoose.Types.ObjectId;

    let user_id = new ObjectId(req.headers["user_id"]);
    let data = await TasksModel.aggregate([
      { $match: { user_id: user_id } },
      { $group: { _id: "$status", sum: { $count: {} } } },
    ]);
    return res.json({ status: "successs", message: "Task Counts", data: data });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};
