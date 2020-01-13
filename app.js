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

//Gets all of the items in the inventory
app.get("/inventory", (req, res)=>
    {
        connection.query('Select * from inventory', (error, rows,fields)=>
            {
                if (error) throw error;
                res.end(JSON.stringify(rows));
                console.log("All items are fetched")
            }
        )
    }
)

//Gets a single item in the inventory
app.get("/inventory/:id", (req,res)=>
    {
        connection.query('Select * from inventory where id = ?', [req.params.id], (error, rows, fields)=>
            {
                if (err) throw err;
                res.end(JSON.stringify(rows));
                console.log("The item " + req.params.id + " is fetched")
            }
        )
    }
)
