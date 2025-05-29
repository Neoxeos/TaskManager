import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  startDare: {
    type: Date,
    required: false,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: false,
  },
},
{timestamps: true},
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
