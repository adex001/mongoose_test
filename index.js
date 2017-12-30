//Starting point of our application.
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const dbUrl = 'mongodb://localhost/myApp';

//Create a schema for the User Object.

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    religion: String
});



// Connecting to the database
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

//Modelling the schema
let user = mongoose.model('user', userSchema);


//Returns the homepage
app.get('/', function(req, res){
    
    res.send('Welcome to the homepage!');
});

//To add a user to the database
// * Make a gegt request!
app.get('/user', function(req, res){
   res.send('You are about adding a user to the database...'); 
});

//* Add a user to the database

let user1 = new user({
   name: 'Adeoye',
    age: 28, 
    religion: 'Christian'
}) ;
app.post('/user', function(req, res){
   user1.save(function(err, usera){
      if(err){
          res.send('An error has occured and it looks like below');
          res.send(err);
      } else{
          res.send('successfuly logged in into the database!');
         
      }
   }); 
});


// finding all users from the database

app.get('/find', function(req, res){
    user.find({}, function(err, results){
       if(err){
           res.send(err);
       } else{
           res.send(results);       }
    });
});
//Calling the app
app.listen(port, function(req, res){
   console.log('This app is currently running on port '+port); 
});