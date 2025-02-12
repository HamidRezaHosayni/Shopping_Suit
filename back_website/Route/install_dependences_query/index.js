// http://localhost:5000/install_depandences

const express = require("express")
const route_install_dependencis=express.Router()
const {All_create_dependencis_class}=require("../../Module-DB/All_create_depandantis")

route_install_dependencis.get("/install_depandences",(req,res,next)=>{
    All_create_dependencis_class.CREATE_DATABASE()
    All_create_dependencis_class.CREATE_TABALE_REGESTER()
    All_create_dependencis_class.CREATE_TABALE_REGESTER_VALIDATION()
    All_create_dependencis_class.CREATE_TABALE_PANT_ORDER()
    All_create_dependencis_class.CREATE_TABALE_LOGIN_ADMIN()
    All_create_dependencis_class.CREATE_TABALE_ROUT_ADMIN_ADD_PRODUCT()
    All_create_dependencis_class.CREATE_TABALE_ROUT_CONTACT_ME()
    All_create_dependencis_class.CREATE_TABALE_PROFILE_USER()
    next()
})



module.exports=route_install_dependencis