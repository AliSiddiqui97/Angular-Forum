const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("We are home boi!");
});

router.get('/posts',(req,res)=>{
    res.send("We are posts boi!");
});


module.exports = router;