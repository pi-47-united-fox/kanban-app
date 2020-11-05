require("dotenv").config()
const express  = require("express")
const app = express()
const route = require("./routes")
const cors = require("cors")
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(route)

app.listen(port, ()=>{
    console.log("listening on port", port);
})