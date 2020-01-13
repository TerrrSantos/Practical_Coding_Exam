//Initialization of server
const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")

const app = express()

//Body Parser Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.listen(3000,()=>
    {
        console.log("Server is up");
    }
)
