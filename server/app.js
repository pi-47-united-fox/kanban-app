require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 4000
const errHendler = require('./middleware/errHendler')
const router = require('./router')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)
app.use(errHendler)


app.listen(PORT, () => {
    console.log(`This app runing at PROT: ${PORT}`);
})