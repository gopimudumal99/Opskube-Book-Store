import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import BookDetails from './components/BookDetails/BookDetails';
import ShippingInfo from './components/Cart/ShippingInfo';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import Error from "./components/Error/Error";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/books" element={<Main />} />
          <Route path="/books/:keyword" element={<Main />} />
          <Route path="/books/book/:id" element={<BookDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/orders" element={<ConfirmOrder />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
