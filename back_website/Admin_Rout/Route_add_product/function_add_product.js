const { body, validationResult } = require("express-validator")

// validation Method Regester Page============================================
const validation_method_add_product=(req,res,next)=>{
    if(req.url === "/add_product" && req.method !== "POST"){
        return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
    }
    next()
}


const validation_add_product = [
    [
        body("name_product").notEmpty().withMessage("نام محصول نمیتواند خالی باشد").trim().isString().withMessage("این فیلد باید از نوع رشته باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("price_product").notEmpty().withMessage("  قیمت محصول نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("color_suit").notEmpty().withMessage("  رنگ محصول نمیتواند خالی باشد").trim().isString().withMessage("این فیلد باید از نوع رشته باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("fabric_material").notEmpty().withMessage("جنس محصول نمیتواند خالی باشد").trim().isString().withMessage("این فیلد باید از نوع رشته باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("discription_product").notEmpty().withMessage("توضیحات محصول نمیتواند خالی باشد").trim().isString().withMessage("این فیلد باید از نوع رشته باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
    ]
]

module.exports={
    validationResult,
    validation_add_product,
    validation_method_add_product,
    
}