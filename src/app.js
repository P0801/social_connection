const express = require('express');
const app = express();

app.use('/user',(req, res,next) => {
    console.log("sjhsjd")
    next();
    res.send("Rout handler 1");
},(req,res)=>{
    res.send("second resp");
})

// /user is route
// (req,res) => {} is route handler






// app.use("/",(req,res)=>{
//     res.send("this is route")
// })

// app.use("/padma",(req,res)=>{
//     console.log(req.query);
//     res.send("Thahaha");
// })

// app.get("/padma",(req,res) => {
//     res.send("this is padma get api");
// })

// app.post("/padma",(req,res)=> {
//     res.send("this is padma post api");
// })

// app.use('/padma/hello/a',(req,res)=>{
    
//     res.send("this is combined");
// })


// // app.use("/padma",(req,res)=>{
// //     res.send("This is API Response");
// // })


// app.use("/pp",(req,res)=>{
//     res.send("This is API ererer");
// })
// app.use("/hello",(req,res)=>{
//     res.send("This is API hello");
// })
// app.use("/test2323",(req,res)=>{
//     res.send("This is API test 2323");
// })


app.listen(9000,() => {
    console.log("server is running");
});