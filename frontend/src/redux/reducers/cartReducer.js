import { ADD_TO_CART,REMOVE_CART_ITEM, SAVE_SHIPING_INFO,SAVE_ORDER_DETAILS } from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {}, cartItems1: [] },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExists = state.cartItems.find((i) => i.book === item.book);

      if (isItemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.book === isItemExists.book ? item : i
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.book !== action.payload),
      };
    case SAVE_SHIPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
    case SAVE_ORDER_DETAILS:
      return {
        ...state,
        cartItems1: action.payload,
      };
    default:
      return state;
  }
};
