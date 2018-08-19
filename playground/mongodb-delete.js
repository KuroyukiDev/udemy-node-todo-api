// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todo').deleteMany({
  //   text: "change Mizuki's diaper"
  // }).then((res) => {
  //   if (res.result.ok === 1) {
  //     if (res.result.n > 0) {
  //       console.log(`Successfully deleted ${res.result.n} items.`);
  //     } else {
  //       console.log("Oops! You can't delete items that doesn't exist!");
  //     }
  //   }
  // });
  // deleteOne
  // db.collection('Todo').deleteOne({
  //   text: "change Mizuki's diaper"
  // }).then((res) => {
  //   if (res.result.ok === 1) {
  //     if (res.result.n > 0) {
  //       console.log(`Successfully deleted ${res.result.n} item.`);
  //     } else {
  //       console.log("Oops! You can't delete an item that doesn't exist!");
  //     }
  //   }
  // });
  // findOneAndDelete
  db.collection('Todo').findOneAndDelete({
    text: "Sing a song"
  }).then((res) => {
    if (res.ok === 1) {
      if (res.lastErrorObject.n > 0) {
        console.log(`Successfully deleted ${res.lastErrorObject.n} item.`);
        console.log(`Item Text: ${res.value.text}`);
        console.log(`Item Status: ${res.value.completed}`);
        console.log(`Item ID: ${res.value._id}`);

      } else {
        console.log("Oops! You can't delete items that doesn't exist!");
      }
    }
  });


  // console.log('Undoing Last Delete.');
  // db.collection('Todo').insertOne({
  //   _id: new ObjectID(res.value._id),
  //   text: res.value.text,
  //   completed: res.value.completed
  // }, (err, res) => {
  //   if (err) {
  //     console.log('Unable to insert todo', err);
  //   }
  // });

  client.close();
});
