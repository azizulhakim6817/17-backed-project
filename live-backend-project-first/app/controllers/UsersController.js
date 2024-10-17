import e from "express";
import UserModule from "../model/UsersModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";
import sendEmail from "../utility/eamailUtiltty.js";
//Registation..............................................
export const Registration = async (req, res) => {
  try {
    let reqBody = req.body;
    await UserModule.create(reqBody);
    return res
      .status(201)
      .json({ status: "success", Message: "User registered successfully" });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

//login...................................................
export const Login = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await UserModule.findOne(reqBody);

    if (data == null) {
      return res.json({ status: "fail", message: "User not found" });
    } else {
      let token = TokenEncode(data["email"], data["_id"]); //login success token=Decode/Encode
      return res.json({
        status: "success",
        Message: "User login successfully",
        data: { token: token },
      });
    }
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

//PorfileDetails................................................
export const ProfileDetails = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let data = await UserModule.findOne({ _id: user_id });
    return res.json({
      status: "success!",
      message: "user profile successfully",
      data: data,
    });
  } catch (e) {
    res.json({ status: "success", message: e.toString() });
  }
};

//update...............................................
export const ProfileUpdate = async (req, res) => {
  try {
    let reqBody = req.body;
    let user_id = req.headers["user_id"];
    await UserModule.updateOne({ _id: user_id }, reqBody);
    return res.json({ status: "success", Message: "User Update successfully" });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

//EmailVaify...........................................
export const EmailVerify = async (req, res) => {
  try {
    let email = req.params.email;
    let data = await UserModule.findOne({ email: email });
    if (data == null) {
      return res.json({ status: "fail", Message: "User email does not exist" });
    } else {
      // Send OTP To Email
      let code = Math.floor(100000 + Math.random() * 900000);
      let EmailTo = data["email"];
      let EmailText = "Your Code is " + code;
      let EmailSubject = "Task Manager Verification Code";
      await sendEmail(EmailTo, EmailText, EmailSubject);

      // Update OTP In User
      await UserModule.updateOne({ email: email }, { otp: code });
      return res.json({
        status: "success",
        Message: "Verification successfully,check email",
      });
    }
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

//code Varify................
export const CodeVerify = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await UserModule.findOne({
      email: reqBody["email"],
      otp: reqBody["otp"],
    });
    if (data == null) {
      return res.json({ status: "fail", message: "Worng verification code?" });
    } else {
      return res.json({
        status: "Success",
        message: "Verification successfull.",
      });
    }
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

//Reset Password
export const ResetPassword = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await UserModule.findOne({
      email: reqBody["email"],
      otp: reqBody["otp"],
    });
    if (data == null) {
      return res.json({ status: "fail", Message: "Wrong Verification Code" });
    } else {
      await UserModule.updateOne(
        { email: reqBody["email"] },
        {
          otp: "0",
          password: reqBody["password"],
        }
      );
      return res.json({
        status: "success",
        Message: "Password Reset successfully",
      });
    }
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};
