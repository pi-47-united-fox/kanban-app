require('dotenv').config()
const express    = require('express')
const app        = express()
const PORT       = process.env.PORT || 3000
const cors       = require('cors')
const router     = require('./routers')
const errHandler = require('./middlewares/errHandler')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Kanban App server is runnning')
})

app.use(router)
app.use(errHandler)

app.listen(PORT, () => {
    console.log(`Kanban app listening at http://localhost:${PORT}`)
})