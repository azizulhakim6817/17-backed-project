import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lasttName: { type: String, required: true },
    mobile: { type: String, required: true },
    passowrd: { type: String, unique: true, required: true },
    otp: { type: String, default: 0 },
  },

  { timestamps: true, versionKey: false }
);

const Users = mongoose.model("users", userSchema);

export default Users;
