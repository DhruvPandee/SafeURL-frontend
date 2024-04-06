import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import Modal from "./Modal";
// import Report from "./Report";

const SearchBar = (setOpenModal) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [url, setURL] = useState("");

  function handleChange(e) {
    const text = e.target.value;
    setURL(text);
  }

  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeolder="Enter URL"
          value={url}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <button
          id="check"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Check
        </button>
        {modalOpen && <Modal url={url} setOpenModal={setModalOpen} />}

        <button id="report">Report</button>
      </div>
    </>
  );
};
export default SearchBar;
