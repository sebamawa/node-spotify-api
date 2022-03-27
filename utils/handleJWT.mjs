import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// firma token
/**
 * Pasar objeto del usuario
 * @param {*} user 
 */
const tokenSign = async (user) => {
    // payload - key secret - expire time
    const sign = jwt.sign({
        _id: user._id,
        role: user.role
    },
    JWT_SECRET,
    {
        expiresIn: "2h"
    }
    );

    return sign;
}


// verifica token
/**
 * 
 * @param {*} token 
 */
const verifyToken = async (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export {tokenSign, verifyToken};