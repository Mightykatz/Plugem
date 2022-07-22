const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

//configure dotenv to enable library usage
dotenv.config();


//create the mongoDB connection
mongoose.connect(process.env.MONGO_URL,
     {
        useNewUrlParser: true,
        useUnifiedTopology:true},()=>{
});

const db = mongoose.connection

db.on('error',(err)=> {
    console.log('Database connection has failed my G!...error is',err);
})
db.once('open',()=>{
    console.log('Database Connection succesful,Good job!');
})

//middleware (it's pretty much all about requests encryption)
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

//Create the port that will host the application
app.listen(8800,()=>{
    console.log("Backend server is running Nicely now!")
});