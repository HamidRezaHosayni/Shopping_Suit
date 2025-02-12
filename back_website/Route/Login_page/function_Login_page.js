const { body, validationResult } = require("express-validator")


const meddelware_for_validate_method_route = (req, res, next) => {

    if (req.url === "/Login" && req.method !== "POST") {
        return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
    }

    next()
}


const validation = [
    [
        body("username").notEmpty().withMessage("نام کاربری نمیتواند خالی باشد").trim().isString().withMessage("نام کاربری باید یک رشته باشد").isLength({ min: 3 }).withMessage("طول این فیلد باید بیشتر از 3 کاراکتر باشد."),
        body("password").notEmpty().withMessage("پسورد نمیتواند خالی باشد.").trim().isString().withMessage("پسورد باید یک رشته باشد.").isLength({ min: 5 }).withMessage("پسورد نمیتواند کمتر از 5 کاراکتر باشد"),
    ]
]

validation_All ={validation,validationResult}

module.exports = {
    meddelware_for_validate_method_route,
    validation_All
}