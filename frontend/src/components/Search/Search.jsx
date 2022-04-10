import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Search.css'

function Search() {
  const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    
    const searchSubmitHandler = (e) => { 
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/books/${keyword}`);
        } else { 
           navigate("/books");
        }
    }
  return (
    <div className="search">
      <form action="" className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search a Book...."
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Search;
