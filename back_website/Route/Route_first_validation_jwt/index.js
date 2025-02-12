const express=require("express");
const first_validation_jwt=express.Router()
const jwt=require("jsonwebtoken")

first_validation_jwt.post("/first_validation_jwt",(req,res)=>{
    try {
        const jwt_verify = jwt.verify(req.body.headers.Authorization, process.env.TOKEN_VALIDATION_JWT)
        if(jwt_verify){
            res.status(200).send({"Message_type": "successfully", "message":jwt_verify.id})
        }
    } 
    catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).send({"Message_type": "error", "message":"invalid_jwt"})
        }
        return res.sendStatus(403)
    }
})


module.exports=first_validation_jwt