const express=require("express")
const Regester_pyment=express.Router()
const jwt = require("jsonwebtoken")
const {SELECT_PYMENT_USER_TABALE}=require("../../Module-DB/Class_DB")
const {validationResult,validation_jwt_select_All_regester_user,validation_method_Profile_user}=require("./function")

Regester_pyment.use(validation_method_Profile_user)
Regester_pyment.post("/Regeste_pyment",validation_jwt_select_All_regester_user,async(req,res)=>{
    errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log("error in validation Regester form:")
        return res.status(400).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3000/Login-user" });
    }
    else {

        try {
              const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
              if (jwt_verify) {
                  if(req.body.ID_user){
                        console.log(req.body)
                        const selet_pyment=await SELECT_PYMENT_USER_TABALE(req.body.ID_user)
                        res.status(200).send({ "Message_type": "successfully",payment_product:selet_pyment})
                        
                  }
                
              }
          } catch (err) {
              if (err.name === 'TokenExpiredError') {
                  return res.status(401).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3000/Login-user" })
              }
              console.log(err)
              return res.sendStatus(403)
          }

    }



})







module.exports = Regester_pyment