if(process.env.NODE_ENV === 'development'){
    require("dotenv").config();
}
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

const allRoutes = require('./routes/index.js')
const errorHandler = require('./middlewares/errorHandler.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(allRoutes)
app.use(errorHandler)

app.listen(port, function(){
    console.log('App is running on port', port)
})