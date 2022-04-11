import React from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import MetaData from "../Navbar/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart,removeItemsFromCart } from "./../../redux/action/cartActions";
import { Link, useNavigate } from "react-router-dom";
function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const incrQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

    const decrQuantity = (id, quantity, stock) => {
      const newQty = quantity - 1;
      if (1 >= quantity) {
        return;
      }
      dispatch(addItemsToCart(id, newQty));
    };

  const deleteCartItems = (id) => { 
    dispatch(removeItemsFromCart(id))
  }
  const saveOrderDetails = () =>{
    // dispatch(saveOrder(cartItems));
    navigate("/shipping")

  }


  return (
    <div>
      <MetaData title="Cart Page" />

      {cartItems.length === 0 ? (
        <div className="emtyCart">
          <p>No product in Your Cart!</p>
          <Link to="/books">View Products</Link>
        </div>
      ) : (
        <div className="cartPage">
          <div className="cartHeader">
            <p>Product</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {cartItems &&
            cartItems.map((item) => (
              <div className="cartContainer" key={item.book}>
                <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                <div className="cartInput">
                  <button
                    onClick={() =>
                      decrQuantity(item.book, item.quantity, item.stock)
                    }
                  >
                    -
                  </button>
                  <input type="number" value={item.quantity} readOnly />
                  <button
                    onClick={() =>
                      incrQuantity(item.book, item.quantity, item.stock)
                    }
                  >
                    +
                  </button>
                </div>
                <p className="cartSubTotal">{`₹${
                  item.price * item.quantity
                }`}</p>
              </div>
            ))}

          <div className="cartGrossProfit">
            <div></div>
            <div className="cartGrossProfiBox">
              <p>Gross Total</p>
              <p>{`₹${cartItems.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
              )}`}</p>
            </div>
            <div></div>
            {/* <Link to="/shipping" className="checkOutBtn"> */}
            <div onClick={() => saveOrderDetails()} className="checkOutBtn">
              <button>Check Out</button>
            </div>
            {/* </Link> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
