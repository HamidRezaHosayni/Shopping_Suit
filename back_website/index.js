const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()
const helmet=require("helmet")

//use heltman
app.use(helmet())

//use cors for validation request http
var whitelist = require("./function_project/Object_url_allowed_requiest")
app.use(
   cors({
      origin:'*'
         // function (origin, callback) {
         //    console.log(origin)
         //    console.log(Object.values(whitelist))
         //    if (Object.values(whitelist).indexOf(origin) !== -1) {
         //       callback(null, true)
         //    }
         //    else {
         //       console.log("this path not allwed path in app ...!!!")
         //       callback(new Error('Not allowed by CORS'))
         //    }

         // }
      ,
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
   })
)

//use medelware for read json
app.use(express.json())



// import All Route start 
const All_Route = require("./Route/index");
const All_Route_Admin_Panel=require("./Admin_Rout/index")
app.use(All_Route)
app.use(All_Route_Admin_Panel)
//  import All Route end 


const port=process.env.PORT_LISTEN_SERVER
app.listen(port, () => { console.log(`server run is on port ${port}`) })