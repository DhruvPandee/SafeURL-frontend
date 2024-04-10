import React from "react";
import SearchBar from "./SearchBar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="body">
        <div className="home-container">
          <div className="search-bar-container">
            <div>
              <SearchBar></SearchBar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
