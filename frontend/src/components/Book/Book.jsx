import React from "react";
import "./Book.css";

function Book({ book }) {
  return (
    <div className="book">
      <img src={book.images[0].url} alt={book.name} />
      <div className="book-title">
        <span>{book.name}</span>
        <span>{book.description}</span>
        <span>{`₹${book.price}`}</span>
        <button className="cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Book;
