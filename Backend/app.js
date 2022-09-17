// require("dotenv").config();

// const express = require('express')
// const mongoose = require('mongoose')
// const url = 'mongodb://localhost/libraryManagement'
// const cors = require('cors')


import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import routes from './routes/index.js';

const url = 'mongodb://localhost/libraryManagement'

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const con = mongoose.connection

con.on('open', () => {
    console.log('---connected---')
})


// const alienRouter = require('./routes/books')
// app.use('/books', alienRouter)

app.use('/api', routes);

const PORT = process.env.APP_PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})