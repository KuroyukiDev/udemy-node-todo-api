const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');
//
// Todo.deleteMany({}).then((res) => {
//   console.log(res);
// });

Todo.findByIdAndDelete('5b7c885c897a7e0014fce18d').then((doc) => {
  console.log(doc);
});
