const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  coverImageURL: {
    type: String, // Stores image URL from the user
    required: true,
  },
  likes: { type: Number, default: 0 } 
}, {
  timestamps: true // Optional: adds createdAt & updatedAt
});

module.exports = mongoose.model("Book", bookSchema);
