const express = require("express");
const Route_profile_user = express.Router();
const jwt = require("jsonwebtoken")
const { validation_method_Profile_user, validation_jwt_and_All_profile_user, validation_jwt_select_All_regester_user, validationResult } = require("./function_profile_user");
const { SELECT_ALL_TABLE_REGESTER, SELECT_ALL_TABLE_PROFILE_USER, INSERT_DATA_IN_PROFILE_USER,DELETE_DATA_IN_PROFILE_USER_TABLE } = require("../../Module-DB/Class_DB")



Route_profile_user.use(validation_method_Profile_user);
Route_profile_user.post("/profile_user", validation_jwt_select_All_regester_user, async (req, res) => {
    errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log("error in validation Regester form:")
        return res.status(400).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3000/Login-user" });
    }
    else {
        try {
            const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
            if (jwt_verify) {

                const select_All_regester_user = await SELECT_ALL_TABLE_REGESTER()
                const select_All_profile_user = await SELECT_ALL_TABLE_PROFILE_USER()
                const filnd_id_in_profile_user = select_All_profile_user.find((value) => value.id === req.body.id_user)
                if (filnd_id_in_profile_user === undefined) {
                    const select_find_All_regester_user = select_All_regester_user.find((value) => value.id === req.body.id_user)
                    res.status(200).send({ "Message_type": "successfully", "message": "این توکن هنوز اعتبار دارد", value: select_find_All_regester_user })
                }
                else {
                    res.status(200).send({ "Message_type": "successfully", "message": "این توکن هنوز اعتبار دارد", value: filnd_id_in_profile_user })
                }

            }
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3000/Login-user" })
            }
            return res.sendStatus(403)
        }
    }
})




Route_profile_user.post("/update_profile_user", validation_jwt_and_All_profile_user, async (req, res) => {
    errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log("error in validation Regester form:")
        return res.status(400).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3000/Login-user" });
    }
    else {
        // console.log(req.body)
        try {
            const jwt_verify = jwt.verify(req.headers.authorization, process.env.TOKEN_VALIDATION_JWT)
            if (jwt_verify) {
                const select_All_profile_user = await SELECT_ALL_TABLE_PROFILE_USER();
                const filter_select_profile_user = select_All_profile_user.find((value) => value.id === req.body.id)
                // console.log(filter_select_profile_user)

                if (filter_select_profile_user === undefined) {
                   INSERT_DATA_IN_PROFILE_USER(req.body)

                }
                else {
                    const filte_object = Object.values(filter_select_profile_user)
                    const body_object = Object.values(req.body)
                    for (let index = 0; index < filte_object.length; index++) {
                        if(filte_object[index]===body_object[index]){
                            continue;
                        }
                        else{
                            DELETE_DATA_IN_PROFILE_USER_TABLE(filter_select_profile_user.id)
                            INSERT_DATA_IN_PROFILE_USER(req.body)
                            return;
                        }
                    }

                }
                res.status(200).send({ "Message_type": "successfully", "message": " تغییرات با موفقیت انجام شد." })
            }
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).send({ "Message_type": "error", "message": "اعتبار ورود شما به اتمام رسیده است لطفا دوباره وارد شوید", "redirect": "http://localhost:3000/Login-user" })
            }
            return res.sendStatus(403)
        }
    }
})


module.exports = Route_profile_user;