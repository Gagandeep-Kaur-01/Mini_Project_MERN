// const express = require('express')
// const router = express.Router()
// const Book = require('../models')


import express from 'express';
import models, { connectDb } from '../models/index.js';

const app = express()


app.get('/', async(req,res) => {
    try{
           const books = await Book.find()
           res.json(books)
    }catch(err){
        res.send('Error ' + err)
    }
})

app.get('/:id', async(req,res) => {
    try{
           const book = await Book.findById(req.params.id)
           res.json(book)
    }catch(err){
        res.send('Error ' + err)
    }
})


app.post('/', async(req,res) => {
    const book = new Book({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await book.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

app.patch('/:id',async(req,res)=> {
    try{
        const book = await Book.findById(req.params.id) 
        book.sub = req.body.sub
        const a1 = await book.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

// module.exports = router;
export default app;


