// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todo').findOneAndUpdate({
  //   _id: new ObjectID('5b788fb675466001b863e4f7')
  // }, {
  //   $set: {completed: true}
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Mizuki'
  }, {
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  client.close();
});
