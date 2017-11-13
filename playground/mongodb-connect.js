//const MongoClient = require('mongodb').MongoClient;

//can create new object IDs on the fly
const { MongoClient, ObjectID } = require('mongodb');

////create new instance of obj id
//var obj = new ObjectID();
//console.log(obj);

//ES6 destructure. Can create new variables from an object's properties
//var user = { name: 'Deidra', age: 38 };
//var { name } = user;
//console.log(name);

//TodoApp database is created here. Callback if err, else db to write commands
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect Mongodb: ' + err);
    }
    console.log('Connected to Mongodb server.');

    //db.collection('Todos').insertOne({
    //    text: 'Something to do',
    //    completed: false
    //}, (err, result) => {
    //    if (err) {
    //        return console.log('Unable to insert Todo. ', err);
    //    }
    //    //ops will store all inserted. Undefined for filter and indent 2
    //    console.log(JSON.stringify(result.ops, undefined, 2));
    //});

    //db.collection('Users').insertOne({
    //    name: 'Deidra',
    //    age: 38,
    //    location: 'Denver'
    //}, (err, result) => {
    //    if (err) {
    //        return console.log('Unable to insert.', err);
    //    }
    //    console.log(result.ops[0]._id.getTimestamp());
    //});

    db.close();
});