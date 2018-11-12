const expect = require('expect');
const {mongoose} = require('../db/mongoose');
const Note = require('./note');

describe('Demo inheritance with Note', () => {



  it('should create note', async () => {
    var noteToSave = new Note({
      title: 'Groceries',
      text: 'Milk, eggs'
    });

    noteToSave.save();

  });

  it('should find all todos', async () => {
    let todos = await new Note().find();

    expect(todos.length).toBe(2);
  });
});
