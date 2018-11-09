const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { collection: 'todos'});

module.exports = mongoose.model('Todo', TodoSchema);
