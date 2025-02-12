

// validation Method Regester Page============================================
const validation_method_Regester_Login=(req,res,next)=>{
    if(req.url === "/Regester_Admin_Route" && req.method !== "POST"){
        return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
    }
    next()
}


module.exports={
    validation_method_Regester_Login
}