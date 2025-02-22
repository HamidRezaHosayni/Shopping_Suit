const express = require("express")
const All_Route = express.Router()




const install_dependencis_route = require("./install_dependences_query/index")
const Home_page = require("./Home_page/index")
const Regester_Page = require("./Regester_page/index")
const Login_page = require("./Login_page/index")
const Validation_email = require("./validation_email/index")
const Pant_order = require("./Route_Pant_order_form/index")
const suit_order = require("./Route_suit_order_form/index")
const suit_and_pant = require("./Rout_suit_and_pant_order_form/index")
const Route_first_validation_jwt = require("./Route_first_validation_jwt/index")
const Route_get_add_product = require("./Route_get_value_add_product_table/index")
const Route_introduce_shopping_westbsket = require("./Route_introduce_product_shopping_westbasket/index")
const Route_contact_me = require("./contact_me/index");
const Route_profile_user=require('./Route_profile_user/index')
const Route_payment_product=require("./Route_payment_product/index")
const Route_get_one_product=require("./Route_get_one_product/get_one_product")
const Route_Comment_product=require("./Rout_comment_product/index")

All_Route.use(Home_page)
All_Route.use(Regester_Page)
All_Route.use(install_dependencis_route)
All_Route.use(Login_page)
All_Route.use(Validation_email)
All_Route.use(Pant_order)
All_Route.use(suit_order)
All_Route.use(suit_and_pant)
All_Route.use(Route_first_validation_jwt)
All_Route.use(Route_get_add_product)
All_Route.use(Route_introduce_shopping_westbsket)
All_Route.use(Route_contact_me)
All_Route.use(Route_profile_user)
All_Route.use(Route_payment_product)
All_Route.use(Route_get_one_product) 
All_Route.use(Route_Comment_product)


module.exports = All_Route; 
