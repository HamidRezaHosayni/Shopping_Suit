const express=require("express")
const show_regster_product=express.Router()
const {SELECT_PYMENT_USER_ALL_TABALE}=require("../../Module-DB/Class_DB")


show_regster_product.post("/show_Regester_product",async(req,res)=>{

      const pyment_product=await SELECT_PYMENT_USER_ALL_TABALE()

      res.status(200).send({"message":"successfully","pyment_product":pyment_product})
      

})


module.exports=show_regster_product;