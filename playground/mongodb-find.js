// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todo').find({}).count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos:', err);
  });

  db.collection('Todo').find({
    completed: true
  }).count().then((count) => {
    console.log(`Completed: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos:', err);
  });

  db.collection('Todo').find({
    completed: false
  }).count().then((count) => {
    console.log(`Unfinished: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos:', err);
  });

  db.collection('Todo').find({}).toArray().then((docs) => {
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos:', err);
  });

  client.close();
});
