import {
  ALL_BOOKS_FAIL,
  ALL_BOOKS_REQESTS,
  ALL_BOOKS_SUCCESS,
  CLEAR_ERRORS,
  ALL_BOOK_DETAILS_REQESTS,
  ALL_BOOK_DETAILS_SUCCESS,
  ALL_BOOK_DETAILS_FAIL
} from "../constants/constants";

export const bookReducer = (state = {books:[]} , action) => {
  switch (action.type) {
    case ALL_BOOKS_REQESTS:
      return {
        loading: true,
        books: [],
      };
    case ALL_BOOKS_SUCCESS:
      return {
        loading: false,
        booksCount: action.payload.booksCount,
        resultPerPage: action.payload.resultPerPage,
        filterProductCount: action.payload.filterProductCount,
        books: action.payload.books,
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


export const bookDetailsReducer = (state = { book: {} }, action) => {
  switch (action.type) {
    case ALL_BOOK_DETAILS_REQESTS:
      return {
        loading: true,
        ...state,
      };
    case ALL_BOOK_DETAILS_SUCCESS:
      return {
        loading: false,
        book: action.payload,
      };
    case ALL_BOOK_DETAILS_FAIL:
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
