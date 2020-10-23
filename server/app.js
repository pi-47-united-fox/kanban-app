if(process.env.NODE_ENV === 'development'){
    require("dotenv").config();
}

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const router = require('./routes/index')

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))

app.use(router)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`App listening ${port}`)
})