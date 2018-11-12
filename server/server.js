// const {mongoose} = require('./db/mongoose');
// const {ObjectID} = require('mongodb');
// //const {Todo} = require('./models/todo');
// const Todo = require('./models/todo');
// const TodoController = require('./TodoController');
// //const TodoWrapper = require('./db/todo-wrapper');
//
//
// var todo = new Todo({
//   //_id: new ObjectID('5bd75686a4a69e473b728cb0'),
//   text: 'Watch football!!!!!!!'
// });
//
// // var obj = TodoController.createTodo(todo);
// // console.log('Saved TodoController:', JSON.stringify(obj, undefined, 2));
//
// //Todo.prototype.save = function(){console.log('newTodo.save()')};
// var newTodo = new Todo({
//   //_id: new ObjectID('5bd75686a4a69e473b728cb0'),
//   text: 'Watch hockey'
// });
//
// // var newTodo = Object.create(todo);
// newTodo.save();

// todo.save().then((doc) => {
//   console.log('Saved todo:', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Error saving todo', e);
// });

// Todo.findOneAndUpdate({
//     _id: new ObjectID('5bd75686a4a69e473b728cb0')
//   }, {
//     $set: {
//       text: 'Joe'
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });

// console.log('Before update');
// var res = Todo.findByIdAndUpdate(new ObjectID('5bd75686a4a69e473b728cb0'), {text: 'updated text'});
// console.log(res);
console.log('After update');
// todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
//     if (!todo) {
//       return res.status(404).send();
//     }
//
//     res.send({todo});
//   }).catch((e) => {
//     res.status(400).send();
//   })

// Wrapper
// var todoWrapper = new TodoWrapper({
//   text: 'Climbing'
// });

// todoWrapper.save().then((doc) => {
//   console.log('Saved todoWrapper:', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Error saving todo', e);
// });

























// hi
