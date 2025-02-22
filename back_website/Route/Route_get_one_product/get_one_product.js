const express = require("express")
const route_get_one_product = express.Router();
const jwt=require("jsonwebtoken")
const {validation_get_one_product,validationResult,validation_method_get_one_product} =require("./function")
const { SELECT_ADD_PRODUCT_TABALE_FOR_GET_ONE_PRODUCT,SELECT_COMMENT_PRODUCT_TABALE } = require("../../Module-DB/Class_DB")







route_get_one_product.use(validation_method_get_one_product)
route_get_one_product.post("/get_one_product",validation_get_one_product,async(req,res)=>{
      errors = validationResult(req)
       if (!errors.isEmpty()) {
              console.log("error in validation Regester id gat_one_product")
              return res.status(400).json({ errors: errors.array() });
          }
          else {
              try {
                  const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
                  const select_one_product= await SELECT_ADD_PRODUCT_TABALE_FOR_GET_ONE_PRODUCT(req.body.cell_product_page);
                  const select_comment_product=await SELECT_COMMENT_PRODUCT_TABALE(req.body.cell_product_page)
                  if(jwt_verify){
                      res.status(200).send({"Message_type": "successfully","info_product":select_one_product,"comment_product":select_comment_product})
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