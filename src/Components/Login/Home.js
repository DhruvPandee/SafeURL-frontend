import React from "react";
import SearchBar from "./SearchBar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <nav>
        <span className="main-nav">One click for safety</span>
      </nav>
      <div className="body">
        <div className="search-bar-container">
          <div>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
