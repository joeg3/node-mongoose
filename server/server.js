const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');

// Create a task
var todo = new Todo({
  text: 'Buy lift tickets!'
});
todo.save().then((doc) => {
  console.log('Saved todo:', JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Error saving todo', e);
});




































// hi
