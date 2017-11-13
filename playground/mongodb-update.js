//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect Mongodb: ' + err);
    }
    console.log('Connected to Mongodb server.');

    ////findOneAndUpdate. filter, update, options. see update operators
    //db.collection('Todos').findOneAndUpdate({
    //    _id: new ObjectID('5a09edbbfb9718e3938887c2')
    //}, {
    //        $set: {
    //            completed: true
    //        }
    //    }, {
    //        returnOriginal: false
    //    }).then((res) => {
    //        console.log(res);
    //    });


    db.collection('Users').findOneAndUpdate({
        _id: 123
    }, {
            $set: {
                name: 'Back To Dee Dee'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((res) => {
            console.log(res);
        });


    //db.close();
});