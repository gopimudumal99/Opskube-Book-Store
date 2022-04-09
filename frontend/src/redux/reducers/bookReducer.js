import {
  ALL_BOOKS_FAIL,
  ALL_BOOKS_REQESTS,
  ALL_BOOKS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/constants";

export const bookReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case ALL_BOOKS_REQESTS:
      return {
        loading: true,
        books: [],
      };
    case ALL_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload.books,
        booksCount: action.payload.booksCount,
      };
    case ALL_BOOKS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
