import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'


export default function LogIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const validation = () => {
    let error = {};

    if (!user.email) {
      error.email = "email is required";
    }
    if (!user.password) {
      error.password = "password is required";
    }

    return error;
  };
  console.log(error);
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "trisha please put your email address" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.length === 0) {  
        setUser({ ...user, password: "" });
        setError({ ...error, password: "password is Required" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };
  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    navigate("/")
  };

  return (
    <>
      <div className="container">
        <h2>LogIn Form</h2>
        <form action="">
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", textAlign:"center" }}>
              {error?.email}
            </span>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", textAlign:"center" }}>
              {error?.password}
            </span>
          </div>
          <button type="submit" className="btn btn-primary" onClick={Submit}>
            Submit
          </button>
          <br />
        </form>
      </div>
    </>
  );
}