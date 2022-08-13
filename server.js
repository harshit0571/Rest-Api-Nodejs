
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://test:test@harshit.q5po4.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.get('/', (req, res) => {
    res.send("rest api working. Connect to frontend")
})

const subscribersRouter = require('./routes/subscribers')
app.use('/subscriber', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))


