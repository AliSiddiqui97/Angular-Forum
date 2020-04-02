const express = require("express");
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
//Middlewares
app.use(bodyParser.json());

//Import Routes
const threadRoute = require("./Routes/thread");
const userRoute = require("./Routes/user");

app.use('/threads',threadRoute);
app.use('/users',userRoute);


//Routes
app.get('/',(req,res)=>{
    res.send("We are home boi!");
});


//Conencting to mongo
mongoose.connect("mongodb+srv://AliSiddiqui:4591394@cluster0-g3zey.mongodb.net/test?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true },()=>
    console.log("connected")
);


//listening
app.listen(3000);