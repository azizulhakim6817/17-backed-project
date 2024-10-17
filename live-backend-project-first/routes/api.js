import express from "express";
const router = express.Router();

import * as TaskController from "../app/controllers/TaskController.js";
import * as UsersController from "../app/controllers/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

//users.................................................
router.post("/Registration", UsersController.Registration);
router.post("/Login", UsersController.Login);
router.get("/ProfileDetails", AuthMiddleware, UsersController.ProfileDetails);
router.post(
  "/ProfileUpdate/:id",
  AuthMiddleware,
  UsersController.ProfileUpdate
);
router.get("/EmailVerify/:email", UsersController.EmailVerify);
router.post("/CodeVerify", UsersController.CodeVerify);
router.post("/ResetPassword", UsersController.ResetPassword);

//Task Controller..................................................
router.post("/CreateTask", AuthMiddleware, TaskController.CreateTask);
router.post(
  "/UpdateTaskStatus/:id/:status",
  AuthMiddleware,
  TaskController.UpdateTaskStatus
);
router.post(
  "/TaskListByStatus/:status",
  AuthMiddleware,
  TaskController.TaskListByStatus
);
router.post("/DeleteTask/:id", AuthMiddleware, TaskController.DeleteTask);
router.post("/CountTask", AuthMiddleware, TaskController.CountTask);

export default router;
