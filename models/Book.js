
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Object, required: true },
  });
  
  const Book = mongoose.model('Book', bookSchema);
  module.exports = Book;