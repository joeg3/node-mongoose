const {mongoose} = require('./db/mongoose');
const Todo = require('./models/todo');

const addTodo = (todoObj) => {
  const todo = Todo(todoObj);
  return  todo.save();
};

const updateTodo = (id, todoObj) => {
  return Todo.findByIdAndUpdate(id, todoObj);
};

const deleteTodo = (id) => {
  return Todo.findByIdAndDelete(id);
};

const getTodoById = (id) => {
  return Todo.findById(id);
};

const getAll = () => {
  return Todo.find();
};

module.exports = {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
  getAll
};
