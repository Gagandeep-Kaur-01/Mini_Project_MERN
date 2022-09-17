import mongoose from 'mongoose';

import Book from './book.js';
import User from './user.js'

const connectDb = () => {
  return mongoose.connect('mongodb://localhost/libraryManagement');
};

const models = { Book, User };

export { connectDb };

export default models;