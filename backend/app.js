const express= require('express');
const mongoose = require('mongoose');
require('express-async-errors');
const app =express();
const cors = require('cors');
const userRouter = require('./controllers/userRouter');
const blogRouter = require("./controllers/blogRouter");
const config = require('./utils/config');
const loginRouter = require('./controllers/loginRouter');
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
app.use('/api/login',loginRouter);
app.use('/api/users',userRouter);
app.use('/api/blogs',blogRouter);
module.exports = app;