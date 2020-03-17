const express = require("express");
const mongoose = require('mongoose');
const app = express();

//Middlewares


//Routes
app.get('/',(req,res)=>{
    res.send("We are home boi!");
});

app.get('/posts',(req,res)=>{
    res.send("We are posts boi!");
});

//Conencting to mongo
mongoose.connect("mongodb+srv://aliBadshah:asdasdasd@cluster0-gyumy.mongodb.net/test?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true },()=>
    console.log("connected")
);


//listening
app.listen(3000);