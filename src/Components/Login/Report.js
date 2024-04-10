import React from "react";
import "./Report.css";

function Report({ url, setOpenReport }) {
  return (
    <div className="reportBackground">
      <div className="reportContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenReport(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>This website is Reported</h1>
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenReport(false);
            }}
            id="cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Report;
