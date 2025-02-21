const express = require("express")
const route_get_one_product = express.Router();
const jwt=require("jsonwebtoken")
const {validation_get_one_product,validationResult,validation_method_get_one_product} =require("./function")
const {SELECT_ADD_PRODUCT_TABALE}=require("../../Module-DB/Class_DB")

route_get_one_product.use(validation_method_get_one_product)
route_get_one_product.post("/introduce_shopping_westbasket",validation_get_one_product,async(req,res)=>{

      errors = validationResult(req)
       if (!errors.isEmpty()) {

              console.log("error in validation Regester id ")
              return res.status(400).json({ errors: errors.array() });

          }
          else {
              try {

                const select_All_product = await SELECT_ADD_PRODUCT_TABALE();
                let value_introduce_product = req.body; // آرایه‌ای از id ها
                value_introduce_product=value_introduce_product.introduce_product

                const value_filter_select_product = select_All_product.filter(product =>
                    value_introduce_product.includes(product.id) // استفاده از includes برای بررسی وجود id در آرایه
                );
        
        
                // =============================================================
                  const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
                  if(jwt_verify){
                      res.status(200).send({"Message_type": "successfully","result":value_filter_select_product})
                
                  }
              } catch (err) {
                  if (err.name === 'TokenExpiredError') {
                      return res.status(401).send({"Message_type": "error", "message":"اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید","redirect":"http://localhost:3000/Login-user"})
                  }
                  return res.sendStatus(403)
              }
          }
})

module.exports=route_get_one_product