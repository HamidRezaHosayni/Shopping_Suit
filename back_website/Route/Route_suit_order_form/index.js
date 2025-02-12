const express = require("express");
const suit_order = express.Router();
const jwt = require('jsonwebtoken');
const { validation_suit_order, validationResult } = require("./function_validation_suit_order")


suit_order.post("/suit_order", validation_suit_order, (req, res) => {
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
                return res.status(403).send({"Message_type": "error", "message":"اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید","redirect":"http://localhost:3000/Login-user"})
            }
            return res.sendStatus(403)
        }
    }
})


module.exports = suit_order;