import mongoose from 'mongoose';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler'

export const registerUser = asyncHandler(async (req, res) => {
    const {userID ,email, password, profilePic} = req.body
    console.log(req.body)
    const userEmailExists = await User.findOne({ email })
    const userIDExists = await User.findOne({ userID })

    if(userEmailExists || userIDExists){
        res.status(400).send("Email or ID already exists");
        throw new Error('User Already Exists');
    }

    const newUser = new User({
        userID,
        email,
        password,
        pic,
    });

    try{
        await newUser.save()
        res.status(201).json({
            _id: newUser._id,
            email: newUser.email,
            userID: newUser.userID,
            profilePic: newUser.profilePic,
            isAdmin: newUser.isAdmin,
        })
    }catch(error){
        res.status(400).json({message: error.message})
        throw new Error("Error Occured");
    }
});

export const loginUser = async (req,res) => {

}