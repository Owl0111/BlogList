
const totalLikes = (blogs) => {
    return blogs.reduce((totalLikes,blog)=>{
        return totalLikes+blog.likes;
    },0)
}

const favoriteBlog = (blogs) => {
    let favorite = {};
    let favoriteLikes = 0;
    for(let i of blogs){
        if(i.likes>favoriteLikes)
        {
            favorite = i;
            favoriteLikes = i.likes;
        }
    }
    return favorite;
}
module.exports=  {
    
    totalLikes,
    favoriteBlog
}