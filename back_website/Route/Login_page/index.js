const { body, validationResult } = require("express-validator")
const express = require("express")
const route_login = express.Router()
require("dotenv").config();
const jwt = require('jsonwebtoken');
const { compae_hash } = require("../../function_project/hash_func")
const { SELECT_ALL_TABLE_REGESTER } = require("../../Module-DB/Class_DB")
const { meddelware_for_validate_method_route, validation_All } = require("./function_Login_page")




route_login.use(meddelware_for_validate_method_route)
route_login.post("/Login", validation_All.validation, async (req, res) => {

    errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log("error in validation Regester form")
        return res.status(200).json({ errors: errors.array() });
    } else {

        const select_regester = await SELECT_ALL_TABLE_REGESTER()
        const find_username_and_password = select_regester.find(item => item.username === req.body.username)
        const validation_password = find_username_and_password ? await compae_hash(req.body.password, find_username_and_password.password) : null;

        if (!find_username_and_password) {
            res.status(200).send({ "Message_type": "error", "message": "کاربری بااین نام وجود ندارد" })
            return;
        } else {
            if (find_username_and_password && !validation_password) {
                res.status(200).send({ "Message_type": "error", "message": "رمز عبور وارد شده نامعتبر هست" })
                return;
            } else {

                const expiresIn = 3600;
                Token_val_jwt = process.env.TOKEN_VALIDATION_JWT;
                const token = jwt.sign({ "id": find_username_and_password.id }, Token_val_jwt, { expiresIn });
                return res.status(200).send({ "Message_type": "successfull", "message": "شما با موفقیت وارد شدید", "vrify_Login": { "jwt": token, "redirect": "http://localhost:3000/" } })
                
            }
        }

    }
})


module.exports = route_login