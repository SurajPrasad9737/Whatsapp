const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    message:{
        type:String,
        maxLength:50
    },
    createdAt:{
        type:Date,
        required:true
    }
});

const Chat = mongoose.model("chat",chatSchema);

module.exports=Chat;