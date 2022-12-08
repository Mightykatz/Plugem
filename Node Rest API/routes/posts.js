const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post
router.post("/",async (req,res)=>{
    //each post will have userId and postId
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);

    }catch(err){
        res.status(500).json(err)
    }
})

//update post
router.put("/:id",async (req,res)=>{
    try{

        const post = await Post.findById(req.params.id)

        if(post.userId === req.body.userId){
            await post.updateOne( { $set:req.body });
            res.status(200).json("post succesfully updated")
        }
        else{
            res.status(403).json("You can only update your own posts")
        }
    }catch(err){
        res.status(500).json(err)
    }

})

//delete post

router.delete("/:id",async (req,res)=>{
    try{

        const post = await Post.findById(req.params.id)

        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("post succesfully deleted")
        }
        else{
            res.status(403).json("You can only delete your own posts")
        }
    }catch(err){
        res.status(500).json(err)
    }

})

//like and dislike post

router.put("/:id/like",async (req,res)=>{
    try{

        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({ $push: {likes:req.body.userId}});
            res.status(200).json("The post has been liked")
        }
        else{
            await post.updateOne({ $pull: {likes:req.body.userId}});
            res.status(200).json("The post has been disliked")
        }
    }catch(err){
        res.status(500).json(err)
    }
})

//get post
router.get("/:id",async (req,res)=>{
    try{
        const post =await Post.findById(req.params.id)
        res.status(200).json(post)

    }catch(err){
        res.status(500).json(err)
    }
})

//get timeline posts (Aka Nested Asynchronous Fetch)

router.get("/timeline/:userId",async (req,res)=>{

    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id});

        //using a map to get posts of current users friends
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId)=>{
                return Post.find({ userId: friendId});
            })
        );
        
        //combine post of the current user and all currentUSers following on the timeline
        res.status(200).json(userPosts.concat(...friendPosts))
        
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;