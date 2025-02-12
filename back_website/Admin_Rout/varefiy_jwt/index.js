const express = require("express")
const varefiy_jwt = express.Router();
const jwt = require("jsonwebtoken")
const { validation_method_varefiy_jwt } = require("./function_validation_vafy_jwt")

varefiy_jwt.use(validation_method_varefiy_jwt)
varefiy_jwt.post("/varefiy_jwt", (req, res) => {
    try {
        const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
        if (jwt_verify) {
            res.status(200).send({ "Message_type": "successfully", "message": "این توکن اعتبار دارد", "redirect": "http://localhost:3001/" })
        }
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3001/" })
        }
        return res.status(403).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3001/" })
    }

})

module.exports = varefiy_jwt;