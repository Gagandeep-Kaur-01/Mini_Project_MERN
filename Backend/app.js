require("dotenv").config();

const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/libraryManagement'
const cors = require('cors')
const app = express()

app.use(cors())

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('---connected---')
})

app.use(express.json())

const alienRouter = require('./routes/books')
app.use('/books', alienRouter)

const PORT = process.env.APP_PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})