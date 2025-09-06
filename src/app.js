const express = require('express');
const app = express();

app.use("/padma",(req,res)=>{
    res.send("This is API Response");
})


app.use("/pp",(req,res)=>{
    res.send("This is API ererer");
})
app.use("/hello",(req,res)=>{
    res.send("This is API hello");
})
app.use("/test2323",(req,res)=>{
    res.send("This is API test 2323");
})


app.listen(9000,() => {
    console.log("server is running");
});