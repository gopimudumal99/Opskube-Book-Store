import React, { useEffect } from "react";
import { getBooks } from "../../redux/action/productActions";
import {  useDispatch } from "react-redux";
// const book = {
//   name: "THOR",
//   imgages: [
//     { url: "https://images-na.ssl-images-amazon.com/images/I/51qBQOkQPPL.jpg" },
//   ],
//   price: "₹1000",
//   _id: "gopi",
// };
function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return <div></div>;
}

export default Main;
