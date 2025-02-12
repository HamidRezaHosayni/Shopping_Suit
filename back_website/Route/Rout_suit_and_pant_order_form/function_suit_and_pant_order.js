const {body,validationResult}=require("express-validator")


// validation Method Regester Page============================================
const validation_method_suit_and_pantorder_page=(req,res,next)=>{
    if(req.url === "/suit_and_pant" && req.method !== "POST"){
        return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
    }
    next()
}



const validation_suit_and_pant=[
    [

        
        body("ghad_cot").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("sarshna_cot").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("ghad_astin").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("dorshakam_cot").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("dorsineh_cot").notEmpty().withMessage("اندازه قد شلوار نمیتواند خالی باشد").trim().isNumeric().withMessage("این فیلد باید از نوع عددی باشد").isLength({ min: 2 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("chakposht_cot").notEmpty().withMessage("نام کاربری نمیتواند خالی باشد").trim().isString().withMessage("نام کاربری باید یک رشته باشد").isLength({min:3}).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("noea_yagha").notEmpty().withMessage("نام کاربری نمیتواند خالی باشد").trim().isString().withMessage("نام کاربری باید یک رشته باشد").isLength({min:3}).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
  
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
    validation_suit_and_pant,
    validationResult,
    validation_method_suit_and_pantorder_page
}
