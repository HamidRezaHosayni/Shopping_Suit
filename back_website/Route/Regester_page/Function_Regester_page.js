const { body, validationResult } = require("express-validator");

// validation Method Regester Page============================================
const validation_method_Regester_page=(req,res,next)=>{
    if(req.url === "/Regester" && req.method !== "POST"){
        return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
    }
    next()
}

// ==================================================================================

//validation form Regester page ===========================================

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

const validation= [
    [
        body("username").notEmpty().withMessage("نام کاربری نمیتواند خالی باشد").trim().isString().withMessage("نام کاربری باید یک رشته باشد").isLength({min:3}).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("password").notEmpty().withMessage("پسورد نمیتواند خالی باشد.").trim().isString().withMessage("پسورد باید یک رشته باشد.").isLength({min:5}).withMessage("پسورد نمیتواند کمتر از 5 کاراکتر باشد"),
        body("phonenumber").notEmpty().withMessage("شماره تلفن نمیتواند خالی باشد").trim().isString().withMessage("شماره تلفن باید رشته باشد").isLength({min:10,max:16}).withMessage("شماره تلفن باید بیشتراز 10 کاراکتر باشد").matches(phoneRegExp).withMessage("فرمت شماره تلفن مورد نظر درست نمیباشد"),
        body("email").notEmpty().withMessage("ایمیل نمیتواند خالی باشد").trim().isString().withMessage("ایمیل باید یک رشته باشد").isLength({min:5}).withMessage("ایمیل باید بیشتر از 5 کاراکتر باشد").matches(emailRegex).withMessage('فرمت ایمیل مورد نظر درست نیست')
    ]
]

const validation_All={validation,validationResult}

module.exports={
    validation_method_Regester_page,
    validation_All
}