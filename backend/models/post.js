const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const postSchema=new Schema({
    image:{
        type:String,
    },
    description:{
        type:String,
        maxLength:200
    },
    likes:{
        type:Number,
        default:0
    },
    comments:{
        type:String,
        maxLength:1000
    }
});

const Post=mongoose.model("Post",postSchema);

module.exports=Post;