import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom'
import {useSelector } from "react-redux"
function Navbar() {
  const { cartItems } = useSelector((state) => state.cart)
  return (
    <div className="navbar">
      <ul>
        <li>
        <Link to="/search">Search </Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/cart">{`Cart (${cartItems.length})`}</Link>
        </li>
        <li>
          <Link to="/orders">Order</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
