const mongoose  = require('mongoose')
var aloginschema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports = mongoose.model('loginadmin',aloginschema)