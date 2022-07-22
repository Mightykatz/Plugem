const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("hey this is the users routes");
})

module.exports = router;