import React, { useEffect, useState } from "react";
import { getBooks } from "../../redux/action/productActions";
import { useSelector, useDispatch } from "react-redux";
import Book from "./../Book/Book";
import "./Main.css";
import Loader from "../loader/Loader";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
function Main() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, books, booksCount, resultPerPage, filterProductCount } =
    useSelector((state) => state.books);

  const parms = useParams();
  const { keyword } = parms;

  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
  };

  useEffect(() => {
    dispatch(getBooks(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);

  let count = filterProductCount;
  
  return loading ? (
    <Loader />
  ) : (
    <div className="main">
      <div className="main-container">
        {books && books.map((book) => <Book book={book} key={book._id} />)}
      </div>
      {resultPerPage < count && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={booksCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
            firstPageText="1st"
            lastPageText="Last"
          />
        </div>
      )}
    </div>
  );
}

export default Main;
