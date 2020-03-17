const mongoose = require("mongoose");

var ThreadSchema = mongoose.Schema({
    ThreadId: Number,
    ThreadTitle:  String, // String is shorthand for {type: String}
    ThreadBy: Number,
    Thread:   {type:String, required:true},
    ThradeDate: { type: Date, default: Date.now },
    ThreatParent: {type:Number, default:0},
    ThreadLikes: {type:Number, default:0},
    ThreadReplies: {type:Number, default:0},
    Tags: String,
    Category: String
  });


module.exports = mongoose.model('Threads',ThreadSchema );