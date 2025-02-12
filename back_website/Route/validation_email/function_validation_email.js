
// validation Method Regester Page============================================
const validation_method_validation_email_page=(req,res,next)=>{
    if(req.path === "/validation_email" && req.method !== "GET"){
        return res.status(405).send(`you not request with ${req.method} method plece requenst GET method`)
    }
    next()
}


module.exports={
    validation_method_validation_email_page
}