import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/search">
          <a href="/">Search</a>
        </Link>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <a href="/">Cart</a>
        </li>
        <li>
          <a href="/">Order</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
