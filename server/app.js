require("dotenv").config()

const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const router = require("./routes")

app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', ()=>{
    console.log('Welcome to Kanban-app!')
})

app.use(router)

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})