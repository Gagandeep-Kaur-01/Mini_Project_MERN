import mongoose from 'mongoose';


import Book from './book.js';

const connectDb = () => {
  return mongoose.connect('mongodb://localhost/libraryManagement');
};

const models = { Book };

export { connectDb };

export default models;