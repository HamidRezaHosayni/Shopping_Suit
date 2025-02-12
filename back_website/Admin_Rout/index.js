const Regester_Admin=require("./Rgester_Login_route/index")
const varefy_jwt=require("./varefiy_jwt/index")
const Add_product=require("./Route_add_product/index")

const express=require("express");
const All_Route_Admin_Panel=express.Router()


All_Route_Admin_Panel.use(Regester_Admin);
All_Route_Admin_Panel.use(varefy_jwt);
All_Route_Admin_Panel.use(Add_product)





module.exports=All_Route_Admin_Panel;