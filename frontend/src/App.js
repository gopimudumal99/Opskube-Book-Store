import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from './components/Search/Search';
import LoginSingUp from './components/LoginSingUp/LoginSingUp';
import Cart from './components/Cart/Cart';
import BookDetails from './components/BookDetails/BookDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="/books" element={<Main />} />
          <Route path="/books/:keyword" element={<Main />} />
          <Route path="/books/book/:id" element={<BookDetails/>}/>
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginSingUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
