import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Books</a>
        </li>
        <li>
          <a href="/">Register</a>
        </li>
        <li>
          <a href="/">Login</a>
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
