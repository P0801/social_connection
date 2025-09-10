const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/devTinder');

}

// connectDB().then(()=>{
//     console.log("mongoDB connected");
// }).catch((err) => {

//     throw new Error(err)
// }) 

module.exports = { connectDB };