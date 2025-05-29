import Task from "../models/Task";

export const getAllTasks = async (req, res) => {

  try {
    const tasks = await Task.find({});
    if ( tasks.length === 0) {
      return res.status(404).json({ success: false, message: 'Tasks not found' });
    }
    res.status(200).json({ success: true, message: 'Tasks found', task: tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;

  if (!task.title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newTask = new Task(task);
  try {
    await newTask.save();
    res.status(201).json({success: true, task: newTask});
  } catch (error) {
    res.status(500).json({ success: false,  message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const {id} = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }
    res.status(200).json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTask = async (req,res) => {
  const {id} = req.params;
  const newTask = req.body;

  try{
    const task = await Task.findByIdAndUpdate(id, newTask, {new: true});
    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found"});
    }

    return res.status(200).json({success: true, message: "Taks updated successfully", task: task});
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getOneTask = async (req, res) => {
    const {id} = req.params;

    try {
        const task = await Task.findById(id);
        if (!task){
            return res.status(404).json({success: false, message: "Task not found"});
        }
        return res.status(200).json({success: true, message: "Task found successfully", task: task});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

