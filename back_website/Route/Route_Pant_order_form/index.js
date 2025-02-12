const express = require("express");
const Pant_route = express.Router();
const jwt = require("jsonwebtoken")
const { validation_method_Pant_order, validation_pant_order, validationResult } = require("./function_pant_order")
const { INSERT_TABLE_PANT_ORDER } = require("../../Module-DB/Class_DB")


Pant_route.use(validation_method_Pant_order);
Pant_route.post("/Pant_route", validation_pant_order, (req, res) => {

    errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log("error in validation Regester form")
        return res.status(400).json({ errors: errors.array() });
    }
    else {
        try {
            const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
            if(jwt_verify){
                res.status(200).send({"Message_type": "successfully", "message":"برای اضافه کردن محصول به سبد خرید روی دکمه زیر کلیک کنید","redirect":"http://localhost:3000/shopping_basket_page"})
            }
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).send({"Message_type": "error", "message":"اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید","redirect":"http://localhost:3000/Login-user"})
            }
            return res.sendStatus(403)
        }
       

    }

})


module.exports = Pant_route