const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/libraryManagement'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('---connected---')
})

app.use(express.json())

const alienRouter = require('./routes/books')
app.use('/books', alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})