import React, { useEffect, useState } from "react";
import "./BookDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getBookDetails } from "./../../redux/action/productActions";
import { useParams } from "react-router-dom";
import {addItemsToCart} from "../../redux/action/cartActions"
function BookDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.bookDetails);
  const [quantity, setQuantity] = useState(1);

  const incQuantity = () => {
    if (book.stock <= quantity) {
      return;
    }
    setQuantity((pre) => pre + 1);
  };

  const decQuantity = () => {
    if (1 >= quantity) {
      return;
    }
    setQuantity((pre) => pre - 1);
  };

  const cartHandler = () => { 
    dispatch(addItemsToCart(params.id, quantity));
    alert("Item is added To The Cart")
  }

  useEffect(() => {
    dispatch(getBookDetails(params.id));
  }, [dispatch, params.id]);
  return (
    <div className="productDetails">
      <div>
        {book.images && (
          <div>
            <img src={book.images[0].url} alt={book.name} />
          </div>
        )}
      </div>
      <div>
        <div className="detailsBlock-1">
          <h2>{book.name}</h2>
          <p>book # {book._id}</p>
          <hr />
        </div>
        <div className="detailsBlock-2">
          <h1>{`₹${book.price}`}</h1>
          <hr />
          <div className="detailsBlock-2-1">
            <div className="detailsBlock-2-1-1">
              <button onClick={decQuantity}>-</button>
              <input readOnly type="number" value={quantity} />
              <button onClick={incQuantity}>+</button>
            </div>

            <button onClick={cartHandler}>Add To Cart</button>
          </div>
          <hr />
          <p>
            Status:{" "}
            <b className={book.stock < 1 ? "redColor" : "greenColor"}>
              {book.stock < 1 ? "OutOfStock" : "InStock"}
            </b>
          </p>
        </div>
        <div className="detailsBlock-3">Description:{book.description}</div>
        <hr />
      </div>
    </div>
  );
}

export default BookDetails;
