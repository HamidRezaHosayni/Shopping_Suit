const express = require("express")
const route = express.Router();
const { hashpassword } = require("../../function_project/hash_func")
const Class_Query = require("../../Module-DB/Class_DB")
const validation_All = require("./Function_Regester_page")






route.use(validation_All.validation_method_Regester_page)

route.post("/Regester", validation_All.validation_All.validation, async (req, res) => {

    errors = validation_All.validation_All.validationResult(req)
    if (!errors.isEmpty()) {
        console.log("error in validation Regester form")
        return res.status(400).json({ errors: errors.array() });
    } else {
        console.log('request_register_ok');
        // hash password 
        const hash_password = await hashpassword(req.body.password)
        req.body.password = hash_password;

        // Checking the existence of the user 
        const select_All_table_regester_validation = await Class_Query.SELECT_ALL_TABLE_REGESTER_VALIDATION();
        const select_All_table_regester = await Class_Query.SELECT_ALL_TABLE_REGESTER();
        const All_select_regester_and_regester_validation = [...select_All_table_regester_validation??[], ...select_All_table_regester??[]];
        const result_find_user = All_select_regester_and_regester_validation.find(item => item.username === req.body.username || item.email === req.body.email);
     
        if (result_find_user) {
            if (result_find_user.username === req.body.username) {
                res.status(200).send({ "Message_type": "error", "message": "این نام کاربری قبلا ثبت شده است" })
                return;
            }
            else if (result_find_user.email === req.body.email) {
                res.status(200).send({ "Message_type": "error", "message": "این ایمیل قبلا ثبت شده است لطفا ایمیل جدید وارد کنید" })
                return;
            }
        } else {

            Class_Query.INSERT_DATABASE_REGESTER_VALIDATION(req.body)

          
            return res.status(200).send({ "Message_type": "successfull", "message": "ثبت نام شما با موفقیت ثبت شد لطفا برای فعال سازی حساب خود بر روی لینکی که از طریق ایمیل برای شما فرستاده شده کلیک کنید." });
        }
    }
})

module.exports = route;