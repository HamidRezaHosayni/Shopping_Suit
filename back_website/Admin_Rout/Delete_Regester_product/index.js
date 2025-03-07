const express=require("express")
const Delete_profile_user_product=express.Router()
const {DELETE_DATA_IN_PYMENT_USER_TABLE}=require("../../Module-DB/Class_DB")

Delete_profile_user_product.post("/delete_Regester_product",async(req,res)=>{
      const delete_pyment_product=await DELETE_DATA_IN_PYMENT_USER_TABLE(req.body.value)
      console.log(delete_pyment_product)

})


module.exports=Delete_profile_user_product;