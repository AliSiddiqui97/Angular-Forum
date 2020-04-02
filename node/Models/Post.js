const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    
    title: {
        type: String,
        required:true
    },
    
    date: {
        type: Date,
        default: Date.now
    },
    parentID:{
        type: String,
        default: "0"
        
    },
    message:{
        type: String,
        required:true
    },
    nooflikes:{
      type: Number,
      default: 0
    },
    noofcomments:{
      type: Number,
      default: 0
    },
    tags:{
      type: String,
      default: "All"

    },
    category:{
      type:String,
      default: "All"
    },
    userID:{
      type: String
    }

});


module.exports = mongoose.model('Posts', PostSchema);