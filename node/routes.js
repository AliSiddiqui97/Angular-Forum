const express = require('express');
const router = express.Router();

const Thread = require('./Models/Post');

router.get('/',(req,res)=>{
    res.send("We are posts boi!");
});

router.get('/specific',(req,res)=>{
    res.send("We are Specific boi!");
});



router.post('/',(req,res)=>{
    const post = new Thread(
        {
            ThreadId:req.body.ThreadId,
            ThreadTitle: req.body.ThreadTitle,
            ThreadBy:req.body.ThreadBy,
            Thread:req.body.Thread,
            Tags:req.body.Tags,
            Category:req.body.Category
        }
    );
    post.save();
    
});

module.exports = router;