const express = require("express")
const route = express.Router();
const nodemailer = require("nodemailer");
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
            // ارسال ایمیل تاییدیه
            if(req.body.email && req.body.id){
                sendVerificationEmail(req.body.email, req.body.id);
            }
          
            return res.status(200).send({ "Message_type": "successfull", "message": "ثبت نام شما با موفقیت ثبت شد لطفا برای فعال سازی حساب خود بر روی لینکی که از طریق ایمیل برای شما فرستاده شده کلیک کنید." });
        }
    }
})




// تابع ارسال ایمیل تاییدیه
const sendVerificationEmail = (userEmail, id) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hamidrezahosayni22@gmail.com", // ایمیل خودتان را جایگزین کنید
            pass: "lzug qxsl drkj ctzj"   // پسورد ایمیل خودتان را جایگزین کنید
        }
    });
    let mailOptions = {
        from: '"Your Website Name" <atrt_man_class>', 
        to: userEmail,
        subject: "تایید حساب کاربری",
        text: `برای فعال‌سازی حساب روی لینک زیر کلیک کنید: http://192.168.1.108/validation_email?id=${id}`,
        html: `
            <h2>سلام ${id}</h2>
            <p>به وبسایت ما خوش آمدید. لطفاً برای فعال‌سازی حساب کاربری خود روی لینک زیر کلیک کنید:</p>
            <a href="http://192.168.1.108/validation_email?id=${id}" target="_blank">
                فعال‌سازی حساب
            </a>
            <p>اگر شما این درخواست را ارسال نکرده‌اید، این ایمیل را نادیده بگیرید.</p>
            <p>با تشکر،</p>
            <p>تیم پشتیبانی</p>
        `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
        } else {
            console.log("Email sent:", info.response);
        }
    });
};






module.exports = route;