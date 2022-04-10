import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

function Book({ book }) {
  return (
    <Link to={`/books/book/${book._id}`} className="book">
      <img src={book.images[0].url} alt={book.name} />
      <div className="book-title">
        <span>{book.name}</span>
        <span>{book.description}</span>
        <span>{`₹${book.price}`}</span>
      </div>
    </Link>
  );
}

export default Book;
