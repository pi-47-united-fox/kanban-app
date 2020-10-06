require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const routes = require('./routes/index.js')
const cors = require('cors')

const errorHandler = require('./middleware/errorHandler')

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(errorHandler)
app.use(routes)

app.get('/', (req, res) => {
    res.send(`test server`)
})

app.listen(PORT, () => {
    console.log(`App Running on port ${PORT}`)
})