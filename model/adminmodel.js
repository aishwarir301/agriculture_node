const mongoose = require('mongoose');
var adminschema = new mongoose.Schema({
    img:{
        type:String
    },
    pname:{
        type:String
    },
    quantity:{
        type:String
    },
    per:{
        type:String
    },
    detail:{
        type:String
    }
})
module.exports = mongoose.model('agriculture',adminschema)
