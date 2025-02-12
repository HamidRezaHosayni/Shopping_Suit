

// validation Method Regester Page============================================
const validation_method_varefiy_jwt = (req, res, next) => {
    if (req.url === "/varefiy_jwt" && req.method !== "POST") {
        return res.status(405).send(`you not request with ${req.method} method plece requenst POST method`)
    }
    next()
}

module.exports = {
    validation_method_varefiy_jwt
}