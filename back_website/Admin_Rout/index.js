const Regester_Admin=require("./Rgester_Login_route/index")
const varefy_jwt=require("./varefiy_jwt/index")
const Add_product=require("./Route_add_product/index")
const Show_regester_product=require("./Route_Regester_product/index")
const Show_user_profile=require("./show_profile_user")
const Delete_pyment_product=require("./Delete_Regester_product")
const express=require("express");
const All_Route_Admin_Panel=express.Router()


All_Route_Admin_Panel.use(Regester_Admin);
All_Route_Admin_Panel.use(varefy_jwt);
All_Route_Admin_Panel.use(Add_product)
All_Route_Admin_Panel.use(Show_regester_product)
All_Route_Admin_Panel.use(Show_user_profile)
All_Route_Admin_Panel.use(Delete_pyment_product)





module.exports=All_Route_Admin_Panel;