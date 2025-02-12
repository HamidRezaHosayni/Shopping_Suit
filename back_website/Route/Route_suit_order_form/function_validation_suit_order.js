
const {body,validationResult}=require("express-validator")


const validation_suit_order=[
    [
        body("ghad_cot").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("sarshna_cot").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("ghad_astin").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("dorshakam_cot").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("dorsineh_cot").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("chakposht_cot").notEmpty().withMessage("نام کاربری نمیتواند خالی باشد").trim().isString().withMessage("نام کاربری باید یک رشته باشد").isLength({min:3}).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("noea_yagha").notEmpty().withMessage("نام کاربری نمیتواند خالی باشد").trim().isString().withMessage("نام کاربری باید یک رشته باشد").isLength({min:3}).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد.")
    ]
]


module.exports={
    validation_suit_order,
    validationResult
}