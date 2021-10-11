
const express = require('express');
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require('path');
const routes = require('./routes/routes');
const mongo = require("./modules/mongoose");
const authMiddleWare = require("./middleware/authMiddleWare")


async function server(mode){
    const app = express();
    app.listen(PORT, (_) => console.log(`Server ready  at ${PORT}`));
    try {    
    app.use(express.json());
    app.use(express.urlencoded({
        extended:true,
    }));
    app.use(cookieParser());
    await mongo();
    app.use( express.static(path.join(__dirname,"src", "public")));
    app.use(authMiddleWare);
    await mongo();
    if(mode == "DEV"){
        app.use(morgan("dev"));
    }




    app.set("view engine", "ejs"); 
    app.set("views",path.join(__dirname,"views"));
    
   } finally { 
       routes(app);
   }
}

module.exports = server;
