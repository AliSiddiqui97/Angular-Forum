const express = require("express");
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
//Middlewares
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes");
app.use('/posts',postsRoute);


//Routes
app.get('/',(req,res)=>{
    res.send("We are home boi!");
});


//Conencting to mongo
mongoose.connect("mongodb+srv://aliBadshah:asdasdasd@cluster0-gyumy.mongodb.net/test?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true },()=>
    console.log("connected")
);


//listening
app.listen(3000);