const userModel=require('../models/user.model');
const bcrypt=require('bcrypt');
const { response } = require('express');
const jwt=require('jsonwebtoken');
const blacklistedTokenModel=require('../models/blackListToken.model');
const captainModel = require('../models/captain.model');
module.exports.authUser=async(req,res,next)=>{
    const token =req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }
    // const isBlackListed=await userModel.findOne({token:token});
    
    const isBlackListed=await blacklistedTokenModel.findOne({token:token});
    if(isBlackListed){
        return res.status(401).json({message:'Unauthorized'});
    }
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
        const user=await userModel.findById(decode._id);
        req.user = user;
        return next();
    }
    catch(err){
        return res.status(401).json({message:'Unauthorized'});
    }


}
module.exports.authCaptain=async(req,res,next) => {
    const token =req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }
    // const isBlackListed=await userModel.findOne({token:token});
    const isBlackListed=await blacklistedTokenModel.findOne({token:token});
    if(isBlackListed){
        return res.status(401).json({message:'Unauthorized'});
    }
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log(isBlackListed);
        const captain=await captainModel.findById(decode._id);
        req.captain = captain;
        return next();
    }
    catch(err){
        return res.status(401).json({message:'Unauthorized'});
    }


}