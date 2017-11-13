//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect Mongodb: ' + err);
    }
    console.log('Connected to Mongodb server.');

    //delete Many
    //db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((res) => {
    //    console.log(res);
    //});

    //delete One
    //db.collection('Todos').deleteOne({ text: 'eat lunch' }).then((res) => {
    //    console.log(res);
    //});

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
        console.log(res);
    });


    //db.close();
});