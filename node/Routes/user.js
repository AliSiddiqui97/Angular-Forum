const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});



//submits a post
router.post('/', upload.single("userImage") ,async (req,res)=>{
    console.log(req.file);
    const toPost = new User({
        name: req.body.name,
        level:req.body.level,
        exp: req.body.exp,
        currentBike: req.body.currentBike,
        favBrand: req.body.favBrand,
        bio: req.body.bio,
        image: req.body.image

    });
    console.log(toPost)
    try{
        const savedUser =  await toPost.save()
        res.json(savedUser);
    }
    catch(err){
        res.json({message:err})
    }
 
});


//gets all posts
router.get('/', async (req,res)=>{
    try{
        const savedUser =  await User.find();
        res.json(savedUser);
    }catch{
        res.json({message:err})
    }
});

router.get('/specific',(req,res)=>{
    res.send("We are Specific boi!");
});



//Update a post
router.patch('/:postId',async (req,res)=>{
   
    const updatedPost = await User.updateOne(
        {_id: req.params.postId },
        { $set: {
            name: req.body.name,
            level:req.body.level,
            exp: req.body.exp,
            currentBike: req.body.currentBike,
            favBrand: req.body.favBrand,
            bio: req.body.bio,
            image: req.body.image
            
        }}
        
        );
        
    res.json(updatedPost);
});



//Get a specific Post
router.get('/:UserId',async (req,res)=>{
    const savedUser = await User.findById(req.params.UserId);
    res.json(savedUser);
});

//Delete Post
router.delete('/:UserId',async (req,res)=>{
    const removedPost = await User.remove({_id: req.params.UserId }) 
    res.json(removedPost);
});



module.exports = router;