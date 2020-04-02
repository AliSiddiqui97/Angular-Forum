const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    level:{
        type: String,
        default: "Jawan"
    },
    exp:{
        type: Number,
        default: 1
    },
    currentBike:{
        type: String
    },
    favBrand:{
        type: String
    },
    bio:{
        type: String
    },
    image:{
        type: String
    }    



});


module.exports = mongoose.model('Users', UserSchema);