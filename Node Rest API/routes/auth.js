const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt"); // encrypt the password

//Register
router.post("/register",async (req, res) => {
    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save the user in the "user" database.
        const user = await newUser.save();
        res.status(200).json(user); //json will come from postman app as the string (json string)

    }catch(err){
        console.log('Error at registration post route ...the error is ',err);
    }
})

//Login
router.post("/login",async (req,res) =>{
    try{
        //search for the unique email in User schema
        const user = await User.findOne({email:req.body.email}); 
        !user && res.status(404).json("User is Not found ..Register first chief!!");
        
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(404).json("incorrect password...who the hell is this!?")

        res.status(200).json(user)
    }catch(err){
        console.log('Error at login post route..the error is ',err);
    }
});

module.exports = router;