import React, { useState, useEffect } from "react";
import "./Modal.css";

function Report({ setOpenModal }) {
  const [safe, setSafe] = useState(null);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>
            This website is{" "}
            {safe == null ? "loading..." : safe ? "safe" : "unsafe"}
          </h1>
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="reportBtn"
          >
            Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Report;
