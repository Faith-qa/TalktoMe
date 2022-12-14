const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel')


const protect = asyncHandler(async(req, res, next) => {
    let token;
    //console.log("this is the token", req.header.Authorization)

    if (
        req.headers.authorization && req.headers.authorization.startsWith('Bearer')
    ) {
        console.log('this is the header', req.headers.authorization)
        try {
            // get token from header

            token = req.headers.authorization.split(' ')[1];
            //console.log(req)

            //verify token

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //console.log("hello", decoded.id)

            req.user = await User.findById(decoded.id).select('-password');
            console.log("hi hello", req.user)

            next();


        } catch(error){
            console.log(error);
            res.status(401);
            throw new Error('Not authorized')
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token')
    }
});

module.exports = { protect };