const express = require('express');
const router = express.Router();

const Thread = require('../Models/Post');




//submits a post
router.post('/', async (req,res)=>{
   
    const toPost = new Thread({
        title: req.body.title,
        message: req.body.message,
        nooflikes: req.body.nooflikes,
        noofcomments: req.body.noofcomments,
        tags: req.body.tags,
        category: req.body.category,
        userID: req.body.userID,
        date: req.body.date

    });
    console.log(toPost)
    try{
        const savedThread =  await toPost.save()
        res.json(savedThread);
    }
    catch(err){
        res.json({message:err})
    }
 
});


//gets all posts
router.get('/', async (req,res)=>{
    try{
        const savedThread =  await Thread.find();
        res.json(savedThread);
    }catch{
        res.json({message:err})
    }
});

router.get('/specific',(req,res)=>{
    res.send("We are Specific boi!");
});




//Get a specific Post
router.get('/:threadId',async (req,res)=>{
    const savedThread = await Thread.findById(req.params.threadId);
    res.json(savedThread);
});

//Delete Post
router.delete('/:threadId',async (req,res)=>{
    const removedPost = await Thread.remove({_id: req.params.threadId }) 
    res.json(removedPost);
});



module.exports = router;