import React, { useState, useEffect } from "react";
import "./Modal.css";

import axios from "axios";
import URL from "../../api";

function Modal({ url, setOpenModal }) {
  console.log("URL:", url);
  const [safe, setSafe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSafe() {
      try {
        setLoading(true);
        console.log("url:", URL.checkURL, "url2:", url);
        const response = await axios.post(URL.checkURL, { url });
        console.log(response.data);
        if (response.status === 200) {
          setSafe(response.data?.safe);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    fetchSafe();
  }, [url]);

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
            {loading
              ? "loading..."
              : safe == null
              ? "URL not in the database"
              : safe
              ? "safe"
              : "unsafe"}
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
            Visit anyway
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
