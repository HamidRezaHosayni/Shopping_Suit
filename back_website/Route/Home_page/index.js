const func=require("./function")
const express = require("express")
const route1=express.Router();

route1.use(func.validation_GET_method)
route1.get("/",func.func_Home )



module.exports = route1;