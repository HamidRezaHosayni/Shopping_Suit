const express = require("express");
const Add_product = express.Router()
const { validationResult, validation_add_product, validation_method_add_product } = require("./function_add_product")
const multer = require("multer");
const { INSERT_TABLE_ADD_PRODUCT } = require("../../Module-DB/Class_DB")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log(file)
        cb(null, "../cotshalvar/public/img/upload_img")
    },
    filename: (req, file, cb) => {
        // console.log(file)
        cb(null, Date.now() + "_" + file.originalname)
    }
})
const upload = multer({ storage }).fields([
    { name: 'uploadfile0' },
    { name: 'uploadfile1' },
    { name: 'uploadfile2' },
    { name: 'uploadfile3' },
]);

Add_product.use(validation_method_add_product)
Add_product.post("/add_product", upload, validation_add_product, (req, res) => {
    errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log("error in validation Regester form")
        return res.status(400).json({ errors: errors.array() });
    }
    else {

        const All_value_insert_product = {
            name_product: req.body.name_product,
            price_product: req.body.price_product,
            color_suit: req.body.color_suit,
            fabric_material: req.body.fabric_material,
            discription_product: req.body.discription_product,
            uploadfile: ""
        }

        for (let i = 0; i < 4; i++) {
            const fileName = req.files[`uploadfile${i}`]?.[0]?.filename;
            if (fileName) {
                All_value_insert_product.uploadfile += fileName + ",";
            }
        }

        console.log(All_value_insert_product.uploadfile)
        INSERT_TABLE_ADD_PRODUCT(All_value_insert_product)
        res.end()
    }

})

module.exports = Add_product;