const express = require("express")
const route_suit_and_pant = express.Router();
const { validation_suit_and_pant, validationResult ,validation_method_suit_and_pantorder_page} = require("./function_suit_and_pant_order")
const jwt=require("jsonwebtoken")

route_suit_and_pant.use(validation_method_suit_and_pantorder_page)
route_suit_and_pant.post("/suit_and_pant", validation_suit_and_pant, (req, res) => {
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


module.exports = route_suit_and_pant;