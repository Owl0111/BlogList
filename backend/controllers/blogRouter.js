const blogRouter = require('express').Router();
const Blog = require('../models/Blog')
const User = require('../models/User')
blogRouter.get('/',(request,response)=>{
    Blog
    .find({})
    .then(blogs=>{
        response.json(blogs);
    });
});

blogRouter.delete('/:id',async (request,response)=> {
    await Blog.findByIdAndDelete(request.params.id)
    response.status(204).end();
})
blogRouter.post('/',async (request,response)=>{
    const body  = request.body;
    const user = await User.findById(body.userID);
    const blog = new Blog({
        title: request.body.title,
        author: request.body.author,
        url: request.body.url,
        likes: request.body.likes||0,
        user: user.id,
    })
    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();

    response.status(201).json(savedBlog);
});

module.exports= blogRouter;