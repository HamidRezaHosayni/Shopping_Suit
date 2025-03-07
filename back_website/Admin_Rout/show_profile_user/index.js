const express=require("express")
const Show_profile_user_product=express.Router()
const {SELECT_ONE_TABLE_PROFILE_USER}=require("../../Module-DB/Class_DB")

Show_profile_user_product.post("/show_info_user_product",async(req,res)=>{
      if(req.body.id_product){
            const id_user=req.body.id_product
            const profile_user=await SELECT_ONE_TABLE_PROFILE_USER(id_user)
            res.status(200).send({"message":"successfully","profile_user":profile_user})
      }

})


module.exports=Show_profile_user_product;