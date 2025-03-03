const { body, validationResult } = require("express-validator")



// validation Method Regester Page============================================
const validation_method_Profile_user=(req,res,next)=>{
      if(req.url === "/Pant_route" && req.method !== "POST"){
          return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
      }
      next()
  }
  
  
  
const validation_jwt_select_All_regester_user= [
      [
          body("ID_user").notEmpty().withMessage("نام کاربری نمیتواند خالی باشد").trim().isString().withMessage("نام کاربری باید یک رشته باشد").isLength({min:3}).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
          
      ]
  ]



  
module.exports={
      validation_method_Profile_user,
      validation_jwt_select_All_regester_user,
      validationResult,
  }