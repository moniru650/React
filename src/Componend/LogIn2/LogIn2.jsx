import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LogIn2() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [error, setError] = useState({});

  const validation = () => {
    let error = {};

    if (!user.name) {
      error.name = "enter your name";
    }
    if (!user.email) {
      error.email = "email is required";
    }
    if (!user.password) {
      error.password = "password is required";
    }
    if (!user.mobile) {
      error.mobile = "enter your mobile number";
    }

    return error;
  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "name") {
      if (value.length === 0) {
        setUser({ ...user, name: "" });
        setError({ ...error, name: " please put your name address" });
      } else {
        setUser({ ...user, name: value });
        setError({ ...error, name: "" });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: " please put your email address" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setUser({ ...user, password: "" });
        setError({...error,password: " please put your password address",
        });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }

    if (name === "mobile"){
      if (value.length === 0) {
        setUser({ ...user, mobile: "" });
        setError({ ...error, mobile: " please put your name mobile" });
      } else {
        setUser({ ...user, mobile: value });
        setError({ ...error, mobile: "" });
      }
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setError(validation());
    const formData = new (FormData())();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("mobile", user.mobile);
    Navigate("/");
  };

  return (
    <>
      <div className="form-group">
        <label for="name">Name:</label>
        <input
          type="name"
          className="form-control"
          name="name"
          value={user.name}
          onChange={(e) => postUserData(e)}
          placeholder="enter name"
        />
        <span style={{ color: "red", textAlign: "center" }}>{error?.name}</span>
      </div>

      <div className="form-group">
        <label for="name">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={user.email}
          onChange={(e) => postUserData(e)}
          placeholder="enter email"
        />
        <span style={{ color: "red", textAlign: "center" }}>
          {error?.email}
        </span>
      </div>

      <div className="form-group">
        <label for="password">password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={user.password}
          onChange={(e) => postUserData(e)}
          placeholder="enter password"
        />
        <span style={{ color: "red", textAlign: "center" }}>
          {error?.password}
        </span>
      </div>

      <div className="form-group">
        <label for="password">mobile</label>
        <input
          type="mobile"
          className="form-control"
          name="mobile"
          value={user.mobile}
          onChange={(e) => postUserData(e)}
          placeholder="entet mobile number"
        />
        <span style={{ color: "red", textAlign: "center" }}>
          {error?.mobile}
        </span>
      </div>

      <button onClick={submit} style={{color: "red" }} >Submit</button>
    </>
  );
}
