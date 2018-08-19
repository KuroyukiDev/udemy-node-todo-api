// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todo').insertOne({
  //   text: "Review today's work schedule with Nacchan",
  //   completed: true
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Mizuki',
    age: 0,
    location: 'Shibuya-ku, Tokyo, Japan'
  }, (err, res) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(res.ops, undefined, 2));

    console.log(res.ops[0]._id.getTimestamp());
  });

  client.close();
});
