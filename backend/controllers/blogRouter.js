const blogRouter = require('express').Router();
const Blog = require('../models/Blog')
blogRouter.get('/api/blogs',(request,response)=>{
    Blog
    .find({})
    .then(blogs=>{
        response.json(blogs);
    });
});
blogRouter.post('/api/blogs',(request,response)=>{
    const blog = new Blog({
        title: request.body.title,
        author: request.body.author,
        url: request.body.url,
        likes: request.body.likes,
    })
    blog.save().then(result=> response.status(201).json(result));
});
module.exports= blogRouter;