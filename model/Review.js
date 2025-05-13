const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  username: String,
  comment: String,
  rating:Number
});

module.exports = mongoose.model("Review", reviewSchema);
