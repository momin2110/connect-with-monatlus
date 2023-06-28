require('dotenv').config();
const app = require('express')();
const http = require('http').Server(app);
const { v4 : uuidv4} = require('uuid');

const urlDb = process.env.urlDb
const mongoose = require('mongoose');

mongoose.connect(urlDb);

const User = require('./models/userModel');

async function insert(){
    await User.create({
        id : uuidv4(),
        name : "Hasan",
        age : 35,
        email : "abul344@gmail.com",
    });
};
insert()


http.listen(3000, function(){
    console.log(`server is running at http://localhost:3000`);
})

