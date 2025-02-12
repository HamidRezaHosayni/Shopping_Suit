require("dotenv").config()

const query_excute={
    host:process.env.HOST_DATABASE,
    user:process.env.USER_DATABASE,
    password:process.env.PASSWORD_DATABASE,
    database:process.env.NAME_DATABASE
}

const query_DB={
    host:process.env.HOST_DATABASE,
    user:process.env.USER_DATABASE,
    password:process.env.PASSWORD_DATABASE,
}


module.exports={
    query_DB,
    query_excute
}