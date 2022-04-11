import React from 'react'
import { Link } from 'react-router-dom'
import "./CartItemCard.css";
function CartItemCard({ item, deleteCartItems }) {
  return (
    <div className="cartItemCard">
      <img src={item.image.url} alt="sas" />
      <div>
        <Link to={`/books/book/${item.book}`}>{item.name}</Link>
        <span>{`Price: ₹ ${item.price}`}</span>
        <p onClick={()=>deleteCartItems(item.book)}>Remove</p>
      </div>
    </div>
  );
}

export default CartItemCard