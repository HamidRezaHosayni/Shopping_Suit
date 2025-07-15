// http://localhost:5000/validation_email

const express = require("express")
const route_validation_email = express.Router()
const { validation_method_validation_email_page } = require("./function_validation_email")
const { SELECT_ALL_TABLE_REGESTER_VALIDATION,INSERT_DATA_IN_PROFILE_USER, INSERT_DATA_IN_REGESTER_VALIDATION_TO_REGESTER, DELETE_DATA_IN_REGESTER_VALIDATION_TABLE } = require("../../Module-DB/Class_DB")



route_validation_email.use(validation_method_validation_email_page)


route_validation_email.get("/validation_email", async (req, res) => {
    try{
        
        const select_table_regeser_validation = await SELECT_ALL_TABLE_REGESTER_VALIDATION()
        const find_id_query = select_table_regeser_validation.find(item => item.id == req.query.id)
        console.log(req.query.id)
    
        if (find_id_query) {
            console.log(find_id_query)
            const object_profile_user={
                "id":find_id_query.id,
                "username": find_id_query.username,
                "password": find_id_query.password,
                "phonenumber": find_id_query.phonenumber,
                "email":find_id_query.email,
                "Address":"",
                "Pstal_Address":""
            }
            console.log(object_profile_user)
            INSERT_DATA_IN_REGESTER_VALIDATION_TO_REGESTER(find_id_query);
            INSERT_DATA_IN_PROFILE_USER(object_profile_user)
            DELETE_DATA_IN_REGESTER_VALIDATION_TABLE(find_id_query.id)
        }
    
    
    
    
        res.end()
        return;


    }catch(e){
        console.log("validation_Email_file have a Error !!!!\n"+e);
        res.status(403).end()
    }
})

module.exports = route_validation_email;