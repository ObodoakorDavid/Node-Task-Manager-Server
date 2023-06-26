/** @format */
// import task from "../models/task";

const Task = require("../models/task");

const getAllTask = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    const { errors } = error;
    const errorArray = [];
    if (errors.tag) {
      errorArray.push(errors.tag.message);
    }
    if (errors.title) {
      errorArray.push(errors.title.message);
    }
    return res.status(400).json({ message: errorArray });
  }
};

const getSingleTask = async (req, res, next) => {
  const { id: taskID } = req.params;
  console.log(taskID);
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    const error = new Error(`No task with ID:${taskID}`);
    error.statusCode = 404;
    return next(error);
  }
  res.status(201).json({ task });
};

const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      const error = new Error(`No task with ID:${taskID}`);
      error.statusCode = 404;
      return next(error);
    }
  } catch (error) {
    const { errors } = error;
    const errorArray = [];
    if (errors.tag) {
      errorArray.push(errors.tag.message);
    }
    if (errors.title) {
      errorArray.push(errors.title.message);
    }
    return res.status(400).json({ message: errorArray });
  }
  res.status(200).json({ id: taskID, data: req.body });
};

const deleteTask = async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    const error = new Error(`No task with ID:${taskID}`);
    error.statusCode = 404;
    return next(error);
  }
  res.status(200).json({ task });
};

module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
