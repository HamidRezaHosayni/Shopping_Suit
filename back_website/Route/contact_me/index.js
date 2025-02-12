const express = require("express");
const Route_contact_me_page = express.Router();
const jwt = require("jsonwebtoken")
const { INSERT_TABLE_CONTACT_ME } = require("../../Module-DB/Class_DB")


Route_contact_me_page.post("/route_contact_me", async (req, res) => {
    try {
        const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
        if (jwt_verify) {
            INSERT_TABLE_CONTACT_ME(req.body)
            res.status(200).send({ "Message_type": "successfully", "message": "این توکن هنوز اعتبار دارد." })
        }
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3000/Login-user" })
        }
        return res.sendStatus(403)
    }
})


module.exports = Route_contact_me_page; 