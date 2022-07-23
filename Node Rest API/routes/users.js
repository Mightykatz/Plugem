const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//update user
router.put("/:id", async (req,res)=>{

    //authorize user update if user uses his/her account or is admin
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);
            }catch(err){
                return res.status(500).json('there is an error in user password update..',err);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            });
            res.status(200).json("Account has succesfully been updated")
        }catch(err){
            return res.status(500).json('there is an error with user properties update..',err);
        }

    }else{
        return res.status(403).json("You can only update your account")
    }
})

//delete user
router.delete("/:id", async (req,res)=>{

    //authorize user update if user uses his/her account or is admin
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id,{
                $set: req.body,
            });
            res.status(200).json("Account has succesfully been deleted")
        }catch(err){
            return res.status(500).json('there is an error with user properties delete..',err);
        }

    }else{
        return res.status(403).json("You can only delete your account")
    }
})

//get a user
router.get("/:id",async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);

        //omit passwaord in the retrieval
        const {password,updatedAt,createdAt, ...other} = user._doc
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err);
    }
})

//follow a user
router.put("/:id/follow",async (req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            //user to be followed
            const user = await User.findById(req.params.id);

            //logged in user who do the following
            const currentUser = await User.findById(req.body.userId);

            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers: req.body.userId} });
                await currentUser.updateOne({$push: {followings: req.params.id} });
                res.status(200).json("user has been followed")
            }

            else{
                res.status(403).json("you already follow this user")
            }
            
        }
        catch(err){
            res.status(500).json(err)
        }

    }
    else{
        res.status(403).json('You cannot follow yourself')
    }
})
module.exports = router;