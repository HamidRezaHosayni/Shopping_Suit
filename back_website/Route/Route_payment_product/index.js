const express = require("express");
const route_payment_product = express.Router();
const jwt = require("jsonwebtoken")
const { SELECT_ALL_TABLE_PROFILE_USER } = require("../../Module-DB/Class_DB")
const ZarinpalCheckout = require('zarinpal-checkout');

const zarinpal = ZarinpalCheckout.create('111111111111111111111111111111111111', true);


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

                    zarinpal.PaymentRequest({
                        Amount: '1000', // In Tomans
                        CallbackURL: 'http://localhost:5000/verify',
                        Description: 'A Payment from Node.JS',
                        Email: 'hi@siamak.work',
                        Mobile: '09120000000'
                      }).then(response => {
                        if (response.status === 100) {
                          console.log(response.url);
                          return res.status(200).send({ "Message_type": "error", "message": "آیا از خرید خود اطمینان دارید ؟", "redirect": response.url })
                        }
                      }).catch(err => {
                        console.error(err);
                      });
                  
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
        return res.sendStatus(403)
    }

})

route_payment_product.get("/verify",(req,res)=>{
    console.log(req.query.Authority)
    // console.log(req.body)
    res.end()
})


module.exports = route_payment_product;