const jwt = require("jsonwebtoken");

const generateToken = (id)=>{
    return jwt.sign({id},"sherik",{
        expiresIn:"30d"
    })
} 

module.exports = generateToken;