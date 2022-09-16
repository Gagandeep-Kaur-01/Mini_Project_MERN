// const mongoose = require('mongoose');
import mongoose from 'mongoose'


const bookSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech:{
        type: String,
        required: true
    },
    sub:{
        type: Boolean,
        required: true,
        default: false
    }

})

// module.exports = mongoose.model('Book', bookSchema)

const Book = mongoose.model('Book', bookSchema);
export default Book;