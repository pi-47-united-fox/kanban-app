require('dotenv').config()
const express = require('express');
const app = express()
const PORT = 3000
const cors = require('cors');
const routes = require('./routes/index');
const { errorHandler } = require('./midleware/errorhandler')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//to index
app.use(routes)
// test home
app.get("/", (req, res) => {
    res.status(200).json({ message: "app runing" })
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`masuk ke sini ${PORT}`);
})