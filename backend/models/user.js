const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
   email:{
    type:String,
    required:true,
   },
   posts:[{
    type:Schema.Types.ObjectId,
    ref:"Post",
    default:[]
   }]
});

userSchema.plugin(passportLocalMongoose);

const User=mongoose.model("User",userSchema);

module.exports=User;