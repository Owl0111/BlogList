const blogRouter = require('express').Router();
const Blog = require('../models/Blog')
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
blogRouter.post('/',(request,response)=>{
    const blog = new Blog({
        title: request.body.title,
        author: request.body.author,
        url: request.body.url,
        likes: request.body.likes||0,
    })
    blog.save().then(result=> response.status(201).json(result));
});
module.exports= blogRouter;