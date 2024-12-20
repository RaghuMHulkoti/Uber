const dotenv=require('dotenv');
dotenv.config();
const express=require('express')
const app=express()
const cors=require('cors');
const dbConnection=require('./db/db')
const cookieParser=require('cookie-parser');
const userRoutes=require('./routes/user.route')
const captainRoutes=require('./routes/captain.route');


dbConnection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send('Hello from ExpressJS!');
})
app.use("/users",userRoutes);
app.use("/captains",captainRoutes);

module.exports =app;