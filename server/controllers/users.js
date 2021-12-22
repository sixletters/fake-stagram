import mongoose from 'mongoose';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler'

export const registerUser = asyncHandler(async (req, res) => {
    const {userID ,email, password, profilePic} = req.body
    if(userID === email){
        res.status(400).send("Email and userID cannot be identical");
        throw new Error('Identical Email and user ID');
    }
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
        profilePic,
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
        console.log(error.message);
        throw new Error("Error Occured");
    }
});

export const loginUser = asyncHandler(async (req,res) => {
    const {loginID, password} = req.body
    const userEmail= await User.findOne({email:loginID})
    const userID = await User.findOne({userID:loginID})
    if(userEmail && userID){
        res.status(400).send("Invalid LoginID");
        throw new Error("Identical Email and loginID");
    }
    let user = userEmail;
    userEmail? user = userEmail: user = userID
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            email: user.email,
            userID: user.userID,
            profilePic: user.profilePic,
            isAdmin: user.isAdmin,
        })
    } else{
        res.status(400).send("Invalid Password")
        throw new Error("Invalid password")
    }
})