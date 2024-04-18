const express=require("express");
const app=express();

const port=8080;

app.get("/api/demo",(req,res)=>{
    res.send("Server working");
})

app.listen(port,(req,res)=>{
    console.log(`Server is listening on port ${port}`);
});