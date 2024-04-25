if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}

const express=require("express");
const app=express();
const passport=require("passport");
const LocalStrategy=require("passport-local");
const session=require("express-session");
const mongoose=require("mongoose");
const Post=require("./models/post.js");
const User=require("./models/user.js");
const bodyParser = require('body-parser');


const db_url="mongodb://127.0.0.1:27017/Flexlink"

main().then(()=>{
    console.log("DB connected successfully");
}).catch((err)=>{
    console.log("Some error occured while connecting to db");
    console.log(err);
})

async function main(){
    await mongoose.connect(db_url);
}

const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const sessionOptions={
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    }
}
app.use(session(sessionOptions));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/api/demo",(req,res)=>{
    res.send("Server working");
})

app.listen(port,(req,res)=>{
    console.log(`Server is listening on port ${port}`);
});