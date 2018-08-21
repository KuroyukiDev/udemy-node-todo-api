const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

var id = '5b7b6a181fb1f10314cd8246';

//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todo);
// });

if (!ObjectID.isValid(id)) {
  return console.log('ID is invalid');
} else {
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return console.log('ID not found');
    }
    console.log('Todo by ID', todo);
  }).catch((e) => console.log(e));
}
