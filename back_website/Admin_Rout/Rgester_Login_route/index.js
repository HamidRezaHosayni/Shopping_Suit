const express = require("express");
const Regester_admin_route = express.Router()
const jwt = require("jsonwebtoken")
const { SELECT_DATA_IN_ADMIN_LOGIN } = require("../../Module-DB/Class_DB");
const { validation_method_Regester_Login } = require("./function_Regester_login")

Regester_admin_route.use(validation_method_Regester_Login)
Regester_admin_route.post("/Regester_Admin_Route", async (req, res) => {
   const mm = await SELECT_DATA_IN_ADMIN_LOGIN()
   const expiresIn = 3600;
   Token_val_jwt = process.env.TOKEN_VALIDATION_JWT;
   const token = jwt.sign({ "id": mm[0] }, Token_val_jwt, { expiresIn });
   if (mm.filter(value => value.username === req.body.username && value.password === req.body.password)[0]) {
      res.status(200).send({ "message": "شما باموفقیت وارد شدید", "vrify_Login": { "redirect": "http://localhost:3001/", "jwt": token } })
   }
   else {
      res.status(200).send({ "message": "این نام کربری موجود نمی باشد" })
   }
})

module.exports = Regester_admin_route;