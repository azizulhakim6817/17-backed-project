import mongoose, { Mongoose } from "mongoose";

const TasksSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    lasttName: { type: String, required: true },
    status: { type: String, required: true },
    user_id: { type: Mongoose.Schema.Type.ObjectId, required: true },
  },

  { timestamps: true, versionKey: false }
);

const Tasks = mongoose.model("users", TasksSchema);

export default Tasks;
