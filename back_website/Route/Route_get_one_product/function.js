const {body,validationResult}=require("express-validator")



// validation Method Regester Page============================================
const validation_method_get_one_product=(req,res,next)=>{
      if(req.url === "/suit_and_pant" && req.method !== "POST"){
          return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
      }
      next()
  }

  
  
const validation_get_one_product=[
      [
          body("cell_product_page").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
      ]
  ]
  
  
  module.exports={
      validation_get_one_product,
      validationResult,
      validation_method_get_one_product
  }
  