const dotenv=require('dotenv');
dotenv.config();
const express=require('express')
const app=express()
const cors=require('cors');
const dbConnection=require('./db/db')
const userRoutes=require('./routes/user.route')

dbConnection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    res.send('Hello from ExpressJS!');
})
app.use("/users",userRoutes);

module.exports =app;