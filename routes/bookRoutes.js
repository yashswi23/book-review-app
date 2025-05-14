const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const Review = require("../model/Review");
// View all books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.render("books", { books });
});
// New Book Form
router.get("/new", (req, res) => {
  res.render("newBook");
});
// Submit new book
router.post("/", async (req, res) => {
  await Book.create(req.body);
  res.redirect("/");
});
// Book details + reviews
router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  const reviews = await Review.find({ bookId: book._id });
  res.render("bookDetails", { book, reviews });
});
// Submit a review
router.post('/:id/like', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');

    book.likes += 1;
    await book.save();

    res.json({ likes: book.likes });
  } catch (err) {
    res.status(500).send('Server error');
  }
});
router.post("/:id/reviews", async (req, res) => {
  const { username, comment, rating } = req.body;

  await Review.create({
    bookId: req.params.id,
    username,
    comment,
    rating: Number(rating),  // ensure it's stored as a number
  });

  res.redirect(`/books/${req.params.id}`);
});

router.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete the book' });
  }
});

module.exports = router;
