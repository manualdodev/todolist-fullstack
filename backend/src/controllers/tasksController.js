const tasksModel = require('../models/tasksModel');

const getAll = async (_request, response) => {
  const tasks = await tasksModel.getAll();
  return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
  const createdTask = await tasksModel.createTask(request.body);
  return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.deleteTask(id);
  return response.status(204).json();
};

const updateTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.updateTask(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
