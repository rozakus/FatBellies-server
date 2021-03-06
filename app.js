const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// router
const router = require('./routers')
const errorHandlers = require('./middleware/errorHandlers')

app.get('/', (req, res) => res.send('Welcome to FaBellies SERVER'))
app.use('/', router)
app.use(errorHandlers)

app.listen(PORT, () => console.log(`>>> Connected at ${PORT}`))