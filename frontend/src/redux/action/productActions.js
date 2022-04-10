import axios from "axios";
import {
  ALL_BOOKS_FAIL,
  ALL_BOOKS_REQESTS,
  ALL_BOOKS_SUCCESS,
  CLEAR_ERRORS,
  ALL_BOOK_DETAILS_REQESTS,
  ALL_BOOK_DETAILS_SUCCESS,
  ALL_BOOK_DETAILS_FAIL,
} from "../constants/constants";

export const getBooks =
  (keyword = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_BOOKS_REQESTS });
      let link = `/api/v1/books?keyword=${keyword}&page=${currentPage}`;
      // let link = `/api/v1/books`;
      const { data } = await axios.get(link);
      dispatch({
        type: ALL_BOOKS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_BOOKS_FAIL,
        payload: error.response,
      });
    }
  };

export const getBookDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: ALL_BOOK_DETAILS_REQESTS });
      const { data } = await axios.get(`/api/v1/books/book/${id}`);
      dispatch({
        type: ALL_BOOK_DETAILS_SUCCESS,
        payload: data.book,
      });
    } catch (error) {
      dispatch({
        type: ALL_BOOK_DETAILS_FAIL,
        payload: error.response,
      });
    }
  };

//Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
