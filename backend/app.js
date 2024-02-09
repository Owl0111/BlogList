const express= require('express');
const mongoose = require('mongoose');
const app =express();
const cors = require('cors');
const blogRouter = require("./controllers/blogRouter");
const config = require('./utils/config');
mongoose.set('strictQuery',false);
mongoose.connect(config.MONGODB_URI).then(()=>
{
    console.log("Connected to mongoDB successfully")
}).catch((error)=>
{
    console.log(error);
})
app.use(express.json());
app.use(cors());
app.use('/api/blogs',blogRouter);
module.exports = app;