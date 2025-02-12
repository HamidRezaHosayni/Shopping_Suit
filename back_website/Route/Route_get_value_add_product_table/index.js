const express = require("express");
const get_Add_product = express.Router();
const { validation_method_get_add_product_page } = require("./function_get_add_product")
const { SELECT_ADD_PRODUCT_TABALE } = require("../../Module-DB/Class_DB")


get_Add_product.use(validation_method_get_add_product_page);
get_Add_product.post("/get_add_product", async (req, res) => {

    const select_add_product = await SELECT_ADD_PRODUCT_TABALE()
    res.status(200).send({ "Message_type": "successfully", "message": "توکن شما دارای اعتبار هست", "redirect": "http://localhost:3000/shopping_basket_page", "value_result": select_add_product })
})
 

module.exports = get_Add_product;