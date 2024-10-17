const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/studentControllers.js");
//const { JWTPractice } = require("../controllers/JWTPractice.js");
//Token Veryfy Middleware use.....................
const TokenVeryfyMiddleware = require("../middleware/TokenVeryfyMiddleware.js");
//Token Issue Controller use....................
const TokenIssueNa = require("../controllers/TokenIssueController.js");

router.get("/", (req, res) => {
  res.status(201).json({ message: "Home Page" });
});

/* //router/ controller add import............
router.post("/InsertStudent", studentsController.InsertStudent);
router.get("/readStudent", studentsController.readStudent);
router.post("/updateStudent/:id", studentsController.updateStudent);
router.get("/deleteStudent/:id", studentsController.deleteStudent);
//router.delete("/deleteStudent/:id", studentsController.deleteStudent);

//create jwt Token..............
router.get("/CreateEncodedToken", JWTPractice.CreateEncodedToken);
//Dcoded jwt Token..............
router.get("/DecordToken/", JWTPractice.DecordToken); */

///router/ controller add import............
router.get("/TokenIssue", TokenIssueNa.TokenIssue);
router.post(
  "/InsertStudent",
  TokenVeryfyMiddleware,
  studentsController.InsertStudent
);
router.get(
  "/readStudent",
  TokenVeryfyMiddleware,
  studentsController.readStudent
);
router.post(
  "/updateStudent/:id",
  TokenVeryfyMiddleware,
  studentsController.updateStudent
);
router.get(
  "/deleteStudent/:id",
  TokenVeryfyMiddleware,
  studentsController.deleteStudent
);
//router.delete("/deleteStudent/:id", studentsController.deleteStudent);

//create jwt Token..............
//router.get("/CreateEncodedToken", JWTPractice.CreateEncodedToken);
//Dcoded jwt Token..............
router.get("/DecordToken", JWTPractice.DecordToken);

//Apply TWT Auth.............

//JWT Encoded & Decodeded

module.exports = router;
