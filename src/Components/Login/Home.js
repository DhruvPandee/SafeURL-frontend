import React from "react";
import SearchBar from "./SearchBar";
import "./Home.css";
const Home = () => {
  return (
    <>
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
