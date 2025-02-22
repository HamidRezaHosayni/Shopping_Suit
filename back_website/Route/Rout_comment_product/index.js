const express = require('express');
const first_validation_jwt=express.Router();
const {validationResult,validation_method_comment_page,validation_parameter}=require("./function")
const jwt = require('jsonwebtoken');
const {INSERT_DATA_IN_COMMENT_PRODUCT}=require("../../Module-DB/Class_DB")


// روت برای اضافه کردن کامنت به محصول
first_validation_jwt.use(validation_method_comment_page)
first_validation_jwt.post('/add_comment',validation_parameter,async(req, res) => {
     
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
      }else{
            try {

                  
                  const token = req.headers.authorization;
                  if (!token) {
                  return res.status(403).send({ "Message_type": "error", "message": "No token provided" });
                  }
                  
                    const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
                    if(jwt_verify){

                        
                        INSERT_DATA_IN_COMMENT_PRODUCT(req.body)
                        res.status(200).send({"Message_type": "successfully", "message":"نظر شما با موفقیت ثبت شد"})
                    }
                } 
                catch (err) {
                    if (err.name === 'TokenExpiredError') {
                        return res.status(401).send({"Message_type": "error", "message":"invalid_jwt"})
                    }
                    return res.sendStatus(403)
                }
      }

      
}
);

module.exports = first_validation_jwt;