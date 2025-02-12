const express = require("express");
const route_introduce_product_shoppinh_westbasket = express.Router();
const jwt = require("jsonwebtoken")
const { SELECT_ADD_PRODUCT_TABALE } = require("../../Module-DB/Class_DB")


route_introduce_product_shoppinh_westbasket.post("/introduce_shopping_westbasket", async (req, res) => {

    try { 
        const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
        if (jwt_verify) {
            const select_All_product = await SELECT_ADD_PRODUCT_TABALE();
            const value_shopping_introduce_product = req.body;
            const value_filter_select_product = []

            select_All_product.map((value_one_select_product) => {
                value_one_select_product.id === value_shopping_introduce_product.find((value) => value === value_one_select_product.id) ?
                    value_filter_select_product.push(value_one_select_product)
                    : console.log("invalid product in database product")
            })

            console.log(value_filter_select_product)
            res.status(200).send({ "Message_type": "successfully", "message": "این توکن هنوز اعتبار دارد.", "value": value_filter_select_product })
        }
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3000/Login-user" })
        }
        return res.sendStatus(403)
    }

})



module.exports = route_introduce_product_shoppinh_westbasket;