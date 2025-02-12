const { body, validationResult } = require("express-validator")




// validation Method Regester Page============================================
const validation_method_Pant_order=(req,res,next)=>{
    if(req.url === "/Pant_route" && req.method !== "POST"){
        return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
    }
    next()
}


const validation_pant_order = [
    [
        body("ghad_shalvar").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("kamar_shalvar").notEmpty().withMessage("اندازه کمر شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("andaza_basan").notEmpty().withMessage("اندازه باسن شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body('andaza_ran').notEmpty().withMessage("اندازه ران شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("andaza_zanoo").notEmpty().withMessage("اندازه زانو شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("andaza_dampa").notEmpty().withMessage("اندازه دمپا شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("andaza_fagh").notEmpty().withMessage("اندازه فاق شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد.")
    ]
]




module.exports={
    validation_pant_order,
    validationResult,
    validation_method_Pant_order
}