const expect = require('expect');
const {mongoose} = require('../db/mongoose');
const {ObjectID} = require('mongodb');
const Todo = require('./todo');
const todoAPI = require('../todo-api');

describe('Make db calls for todos using api', () => {

  var todoOneId = new ObjectID();
  var todoTwoId = new ObjectID();
  const todos = [{
    _id: todoOneId,
    text: 'Walk dog',
    completed: false
  }, {
    _id: todoTwoId,
    text: 'Shopping',
    completed: true
  }];

  beforeEach((done) => {
    Todo.deleteMany({}).then(() => {
      return Todo.insertMany(todos);
    }).then(() => done());
  });

  it('should create todo', async () => {
    var id = new ObjectID();
    var todoToSave = {
      _id: id,
      text: 'Study',
      completed: false
    };

    await todoAPI.addTodo(todoToSave);

    await Todo.findById(id).then((todo) => {
      expect(todo.text).toBe('Study');
      return todo;
    });
  });

  it('should update todo', async () => {
    await todoAPI.updateTodo(todoTwoId, {text: 'Cook'});

    await Todo.findById(todoTwoId).then((todo) => {
      expect(todo.text).toBe('Cook');
      return todo;
    });
  });

  it('should delete todo', async () => {
    await todoAPI.deleteTodo(todoOneId);

    await Todo.findById(todoOneId).then((todo) => {
      expect(todo).toBeFalsy();
      return todo;
    });
  });

  it('should find todo', async () => {
    let todo = await todoAPI.getTodoById(todoTwoId);
    expect(todo.text).toBe('Shopping');
  });

  it('should find all todos', async () => {
    let todos = await todoAPI.getAll();
    expect(todos.length).toBe(2);
  });
});
