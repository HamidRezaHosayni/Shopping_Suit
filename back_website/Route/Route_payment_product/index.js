const express = require("express");
const route_payment_product = express.Router();
const jwt = require("jsonwebtoken")
const { SELECT_ALL_TABLE_PROFILE_USER,INSERT_DATA_IN_PAYMENT_USER } = require("../../Module-DB/Class_DB")



route_payment_product.post("/route_payment_product", async (req, res) => {

    try {
        const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
        if (jwt_verify) {
            
            const select_All_profile = await SELECT_ALL_TABLE_PROFILE_USER()
            const find_select_profile = select_All_profile.find((value) => value.id === req.body.ID_user)
            if (find_select_profile) {
                
                const validation_fild_profile = Object.values(find_select_profile).find((value) => value === undefined || value === null || value === "")
                
                if (validation_fild_profile === "") {
                    return res.status(200).send({ "Message_type": "error", "message": "پروفایل کاربری شما ناقص هست لطفا پروفایل خود را کامل کنید", "redirect": "http://localhost:3000/profile_user" })
                }
                else {
                    //=================================
                    
                    const insert_pyment_user=await INSERT_DATA_IN_PAYMENT_USER(req.body)
                    // console.log(typeof insert_pyment_user)
                   if(insert_pyment_user == undefined){
                    return res.status(200).send({"Message_type":"successfully","message":"شمایک سفارش در حال بررسی دارید . شما میتوانید بعد از تماس کارشناسان  ما دوباره محصول ثبت کنید", "redirect": "http://localhost:3000/"})
                   } 
                   else{
                    return res.status(200).send({"Message_type":"successfully","message":"محصول شما با مفقیت ثبت گردید", "redirect": "http://localhost:3000/Regester_product_user"})
                   }
                     
                    //=================
                }
            }
            else {
                console.log("no profile user ...!!!")
            }

        }
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3000/Login-user" })
        }
        console.log(err)
        return res.sendStatus(403)
    }

})

module.exports = route_payment_product;