import React from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "./../../redux/action/cartActions";
function Cart() {
  const dispatch = useDispatch();
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

  return (
    <div className="cartPage">
      <div className="cartHeader">
        <p>Product</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {cartItems &&
        cartItems.map((item) => (
          <div className="cartContainer">
            <CartItemCard item={item} />
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
            <p className="cartSubTotal">{`₹${item.price * item.quantity}`}</p>
          </div>
        ))}

      <div className="cartGrossProfit">
        <div></div>
        <div className="cartGrossProfiBox">
          <p>Gross Total</p>
          <p>{`₹600`}</p>
        </div>
        <div></div>
        <div className="checkOutBtn">
          <button>Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
