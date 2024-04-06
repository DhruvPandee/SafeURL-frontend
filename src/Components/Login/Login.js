import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [values, setValues] = useState({
    name: "",
    email: " ",
    password: " ",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/register", values)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };
  return (
    <div class="body">
      <div div class="main">
        <input type="checkbox" id="chk" aria-hidden="true"></input>

        <div class="signup">
          <form onsubmit={handleSubmit}>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="txt"
              placeholder="User name"
              onchange={(e) => setValues({ ...values, name: e.target.value })}
              required=""
            ></input>

            <input
              type="email"
              name="email"
              placeholder="Email"
              onchange={(e) => setValues({ ...values, email: e.target.value })}
              required=""
            ></input>

            <input
              type="Password"
              name="password"
              placeholder="Password"
              onchange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required=""
            ></input>

            <button type="submit">Sign up</button>
          </form>
        </div>
        <div class="login">
          <form>
            <label for=" chk" aria-hidden="true">
              Login
            </label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
            ></input>

            <input
              type="Password"
              name="password"
              placeholder="Password"
              required=""
            ></input>

            <Link to="/home">
              {" "}
              <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
      {/* <script src="Components/form.js"></script> */}
    </div>
  );
};

export default Login;
