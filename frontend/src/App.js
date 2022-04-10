import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from './components/Search/Search';
import LoginSingUp from './components/LoginSingUp/LoginSingUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="/books" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/books/:keyword" element={<Main />} />
          <Route path="/login" element={<LoginSingUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
