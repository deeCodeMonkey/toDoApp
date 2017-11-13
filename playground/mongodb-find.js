//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect Mongodb: ' + err);
    }
    console.log('Connected to Mongodb server.');

    //db.collection('Todos').find({
    //    _id: new ObjectID("5a09d7cf4d33ec382481b704")
    //}).toArray().then((docs) => {
    //    console.log('Todos');
    //    console.log(JSON.stringify(docs, undefined, 2));
    //}, (err) => {
    //    console.log('Unable to fetch todos', err);
    //});

    //db.collection('Todos').find().count().then((count) => {
    //    console.log(`Todos count: ${count}`);
    //    console.log(JSON.stringify(count, undefined, 2));
    //}, (err) => {
    //    console.log('Unable to fetch', err);
    //});

    db.collection('Users').find({ name: 'Deidra' }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });





    //db.close();
});