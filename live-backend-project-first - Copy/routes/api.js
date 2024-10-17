import express from "express";
const router = express.Router();

import * as TaskController from "../app/controllers/TaskController.js";
import * as UsersController from "../app/controllers/UsersController.js";

//users.................................................
router.post("/Registration", UsersController.Registration);
router.post("/Login", UsersController.Login);
router.post("/ProfileDetails", UsersController.ProfileDetails);
router.post("/ProfileUpdate", UsersController.ProfileUpdate);
router.post("/EmailVerify ", UsersController.EmailVerify);
router.post("/CodeVerify", UsersController.CodeVerify);
router.post("/ResetPassword", UsersController.ResetPassword);

//Task Controller..................................................
router.post("/CreateTask", TaskController.CreateTask);
router.post("/UpdateTaskStatus", TaskController.UpdateTaskStatus);
router.post("/TaskListByStatus", TaskController.TaskListByStatus);
router.post("/DeleteTask", TaskController.DeleteTask);
router.post("/CountTask", TaskController.CountTask);

export default router;
