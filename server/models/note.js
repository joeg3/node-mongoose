const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notes = require('../notes-api');

let NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
}, {collection: 'notes'});

var Note = mongoose.model('Note', NoteSchema);

const note1 = {
  _id: 1,
  title: 'Homework',
  text: 'Math, Science'
};
const note2 = {
  _id: 2,
  title: 'Shopping list',
  text: 'Eggs, milk'
};

Note.prototype.save = () => {
  console.log('Instead of writing to mongodb, save note some other way');
};

Note.prototype.find = () => {
  console.log('Instead of reading from mongodb, retrieve note some other way');
  return [note1, note2];
};


module.exports = Note;
