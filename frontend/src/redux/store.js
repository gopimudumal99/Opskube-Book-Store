import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { bookDetailsReducer, bookReducer } from "./reducers/bookReducer";
import { cartReducer } from "./reducers/cartReducer";
const rootReducer = combineReducers({
  books: bookReducer,
  bookDetails: bookDetailsReducer,
  cart: cartReducer,
});

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
