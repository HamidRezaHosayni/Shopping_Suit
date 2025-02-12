const validation_GET_method = (req, res, next) => {
    if (req.url == "/" && req.method !== "GET") {
        console.log("not Get method")
        return res.status(405).send(`you not request with ${req.method} plece requenst GET method`)
    }
    next()
}


const func_Home = (req, res) => {
    return res.redirect("http://192.168.1.106:3000/")
}
 
module.exports = {
    func_Home,
    validation_GET_method
}