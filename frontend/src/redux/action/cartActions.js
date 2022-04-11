import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPING_INFO,
  SAVE_ORDER_DETAILS,
} from "../constants/cartConstants";
import axios from "axios";

//add to cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/book/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      book: data.book._id,
      name: data.book.name,
      price: data.book.price,
      image: data.book.images[0],
      stock: data.book.stock,
      quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//remove from cart
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_CART_ITEM,
        payload:id,
    })
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

}

//save shiping info
export const saveShippingIfo = (data) => async (dispatch) => {
    dispatch({
        type: SAVE_SHIPING_INFO,
        payload:data
    });

    localStorage.setItem("shippingInfo",JSON.stringify(data))
}

// save order
export const saveOrder = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_ORDER_DETAILS,
    payload:data
  });
  localStorage.setItem("cartItems1", JSON.stringify(data));
};