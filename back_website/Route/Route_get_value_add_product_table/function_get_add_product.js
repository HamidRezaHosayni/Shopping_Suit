

// validation Method Regester Page============================================
const validation_method_get_add_product_page=(req,res,next)=>{
    if(req.url === "/get_add_product" && req.method !== "POST"){
        return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
    }
    next()
}

module.exports={
    validation_method_get_add_product_page
}