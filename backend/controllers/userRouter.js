const bcrypt = require('bcrypt');
const userRouter = require('express').Router();
const User  = require('../models/User');



userRouter.post('/', async (req , res)=>{
    const {username,password,name} = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password,saltRounds);
    const user = new User({
        username,
        passwordHash,
        name,
    })
    const savedUser = await user.save();
    res.status(201).json(savedUser);
})

userRouter.get('/',async (req, res) => {
    const users = await User.find({}).populate('blogs');
    res.json(users);
})
module.exports = userRouter;