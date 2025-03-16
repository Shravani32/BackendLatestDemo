const express=require("express")
const app=express()
require("dotenv").config();

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})

app.get("/login",(req,res)=>{
    res.send("Login page")
})

app.get("/",(req,res)=>{
    res.send("Hello, World!")
});