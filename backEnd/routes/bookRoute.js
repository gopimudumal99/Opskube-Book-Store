const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getoneBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.route("/books").get(getAllBooks);
router
  .route("/books/new")
  .post(createBook);
router
  .route("/books/book/:id")
  .put(updateBook)
  .delete(deleteBook)
  .get(getoneBook);

router.route("/book/:id").get(getoneBook);

module.exports = router;
