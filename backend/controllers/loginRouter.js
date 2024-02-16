const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/User');
const { response } = require('express');

loginRouter.post('/',async (req, res)=>{
    const body = req.body;
    const {username, password} = body;
    const user = await User.findOne({username});
    
    const passwordCorrect  = password===null? false: bcrypt.compare(password,passwordCorrect);
    if(!(user && passwordCorrect))
    {
        res.status(401).send({
            'error': 'Username or password is wrong'
        })
    }
    const token = jwt.sign(password,process.env.SECRET)
    response.status(200).send({token,username:user.username,name:user.name})

})
module.exports = loginRouter;