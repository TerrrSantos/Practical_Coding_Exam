//Initialization of server
const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")

const app = express()

//Body Parser Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//Start MySQL Connection
var connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'password',
        database:'questronix',
        multipleStatements:true
    }
)

connection.connect((err)=>
    {
        if(!err)
        {
            console.log("Connected to Questronix Database")
        }
        else
        {
            console.log("Connection Failed");
        }
    }
)
//End of MySQL Connection

app.listen(3000,()=>
    {
        console.log("Server is up");
    }
)
