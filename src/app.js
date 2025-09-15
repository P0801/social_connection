const express = require('express');
const { User } = require('./schema/userSchema')
const app = express();

const { authCheck } = require('./middleware/auth');
//const { mongoDBConnect }
const { connectDB } = require('./config/database');

app.use(express.json());

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
    console.log(req.body);
    // userObj = {
    //     firstName: 'Padma',
    //     lastName: 'Modi',
    //     email: 'padmamodi1@gmail.com',
    //     gender: 'female',
    //     age: '26'
    // }
    const user = new User(req.body.user);
    await user.save();
    res.send('User signed up');
})

app.get("/feed",async (req, res) => {
    console.log(req.query);
    const userData = await User.find({'email': req.query.email});
    if(userData.length) {

        res.send(userData);
    }
    else{
        res.status(404).send("No user");
    }
    
})

app.get("/all",async (req, res) => {
    console.log(req.query);
    const userData = await User.find({});
    if(userData.length) {

        res.send(userData);
    }
    else{
        res.status(404).send("No user");
    }
    
})

app.get("/getOne",async (req, res) => {
    console.log(req.query);
    const userData = await User.findOne({email: req.query.email});
    if(userData) {

        res.send(userData);
    }
    else{
        res.status(404).send("No user");
    }
    
})


app.delete("/deleteOne",async (req, res) => {
    console.log(req.query);
    const userData = await User.findOne({email: req.query.email});
    if(userData) {
        const userData1 = await User.findByIdAndDelete(userData._id);
        res.send(userData1);
    }
    else{
        res.status(404).send("No user");
    }
    
})



connectDB().then(()=>{
    console.log("mongoDB connected");
    app.listen(9000,() => {
    console.log("server is running");
});
}).catch((err) => {

    throw new Error(err)
}) 

