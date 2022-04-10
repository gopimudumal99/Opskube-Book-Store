const Book = require("../models/Book.model");
const ErrorHander = require("../utils/errorHander");
const catchAsynError = require("../middleware/catchAsyncErrors");
const myQueryApi = require("../utils/apifeatures");

//Create a Book ---> Admin
exports.createBook = catchAsynError(async (req, res) => {
  req.body.user = req.user.id;
  const book = await Book.create(req.body);
  res.status(201).json({
    sucsses: true,
    book,
  });
});


// Get All Books
exports.getAllBooks = catchAsynError(async (req, res,next) => {
  const resultPerPage = 8;
  const booksCount = await Book.countDocuments();
  const myQueries = new myQueryApi(Book.find({}), req.query)
    .search()
    .filter();
  let books = await myQueries.query.clone();
  let filterProductCount = books.length;
  myQueries.pagination(resultPerPage);
  books = await myQueries.query;

  res.status(200).json({
    sucsses: true,
    books,
    booksCount,
    resultPerPage,
    filterProductCount
  });
});


//Get One Book
exports.getoneBook = catchAsynError(async (req, res, next) => {
  let book = await Book.findById(req.params.id);
  if (!book) {
    return next(new ErrorHander("Book not found", 404));
  }
  book = await Book.findById(req.params.id);

  res.status(200).json({
    sucsses: true,
    book,
  });
});


//Update a Book ---> Admin
exports.updateBook = catchAsynError(async (req, res, next) => {
  let book = await Book.findById(req.params.id);
  if (!book) {
    return next(new ErrorHander("Book not found", 404));
  }
  book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    sucsses: true,
    book,
  });
});


//Delete a Book ---> Admin
exports.deleteBook = catchAsynError(async (req, res, next) => {
  let book = await Book.findById(req.params.id);
  if (!book) {
    return next(new ErrorHander("Book not found", 404));
  }
  book = await Book.findByIdAndDelete(req.params.id);
  res.status(200).json({
    sucsses: true,
    message: "Book is deleted",
  });
});


