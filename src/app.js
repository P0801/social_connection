const express = require('express');
const { User } = require('./schema/userSchema')
const app = express();

const { authCheck } = require('./middleware/auth');
//const { mongoDBConnect }
const { connectDB } = require('./config/database');

//app.use('/',authCheck);

app.use('/user',(err,req, res,next) => {
    throw new Error("asas");
    console.log("asas",err);
  //  next();
   // res.send("Rout handler 1");
},(req,res)=>{
    res.send("second resp");
})

app.get("/admin/",authCheck,(req,res) => {
    res.send("hello");
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

app.post('/signup',async (req, res) => {
    userObj = {
        firstName: 'Padma',
        lastName: 'Modi',
        email: 'padmamodi1@gmail.com',
        gender: 'female',
        age: '26'
    }
    const user = new User(userObj);
    await user.save();
    res.send('User signed up');
})


connectDB().then(()=>{
    console.log("mongoDB connected");
    app.listen(9000,() => {
    console.log("server is running");
});
}).catch((err) => {

    throw new Error(err)
}) 

