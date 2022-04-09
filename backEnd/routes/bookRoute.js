const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
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
  .post(isAuthenticatedUser, authorizeRoles("admin"), createBook);
router
  .route("/books/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateBook)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBook)
  .get(getoneBook);

module.exports = router;
