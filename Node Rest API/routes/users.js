const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
//update user
router.put("/:id", async (req,res)=>{

    //authorize user update if user uses his/her account or is admin
    if(req.body.userId === req.params.id || req.user.isAdmin){
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
            return res.status.apply(500).json('there is an error with user properties update..',err);
        }

    }else{
        return res.status(403).json("You can only update your account")
    }
})
//delete user
//get a user
//follow a user

module.exports = router;