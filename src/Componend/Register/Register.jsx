import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const TogglePasswordType = () => {
    passwordType == "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  // declaring useState hook for form validation with input and error states
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  // validation and form submission when submit button is hit
  const inputSubmit = async (e) => {
    e.preventDefault();
    setError(validate());
    const formData = new FormData();
    formData.append("first_name", input.first_name);
    formData.append("last_name", input.last_name);
    formData.append("email", input.email);
    formData.append("password", input.password);

    try {
      const response = await fetch(
        "https://wtsacademy.dedicateddevelopers.us/api/user/signup",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.status === 200) {
        // toast("Good")
        console.log("Success");
        navigate("/Login");
      } else {
        //toast("Bad")
        console.log("Bad Request");
        navigate("/Register");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  const validate = () => {
    let error = {};
    if (!input.first_name) {
      error.first_name = "First name cannot be blank!";
    }
    if (!input.last_name) {
      error.last_name = "Last name cannot be blank!";
    }
    if (!input.email) {
      error.email = "Email cannot be blank!";
    }
    if (!input.password) {
      error.password = "Password cannot be blank!";
    }
    return error;
  };

  // validation while typing inputs in respective input fields with the help of name and value attributes of input tag/elements
  let name, value;
  const inputChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "first_name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "First name cannot be blank!" });
        setInput({ ...input, first_name: "" });
      } else {
        setError({ ...error, first_name: "" });
        setInput({ ...input, first_name: value });
      }
    }

    if (name === "last_name") {
      if (value.length === 0) {
        setError({ ...error, last_name: "Last name cannot be blank!" });
        setInput({ ...input, last_name: "" });
      } else {
        setError({ ...error, last_name: "" });
        setInput({ ...input, last_name: value });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email cannot be blank!" });
        setInput({ ...input, email: "" });
      } else {
        setError({ ...error, email: "" });
        setInput({ ...input, email: value });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "Password cannot be blank!" });
        setInput({ ...input, password: "" });
      } else {
        setError({ ...error, password: "" });
        setInput({ ...input, password: value });
      }
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="w-50 mx-auto mt-3">Registration Page</h2>
        <p className="mt-3">
          Fill the following details to create your account.
        </p>
        <form
          className="w-50 mx-auto mt-3 mb-5 p-5 border border-primary rounded-lg bg-light"
          onSubmit={inputSubmit}
        >
          <div class="form-group text-left">
            <input
              type="text"
              name="first_name"
              value={input.first_name}
              onChange={inputChange}
              class="form-control"
              id="first_name"
              placeholder="First Name"
            />
            <span style={{ color: "red" }}>{error?.first_name}</span>
          </div>
          <div class="form-group text-left">
            <input
              type="text"
              name="last_name"
              value={input.last_name}
              onChange={inputChange}
              class="form-control"
              id="last_name"
              placeholder="Last Name"
            />
            <span style={{ color: "red" }}>{error?.last_name}</span>
          </div>
          <div class="form-group text-left">
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={inputChange}
              class="form-control"
              id="email"
              placeholder="Email"
            />
            <span style={{ color: "red" }}>{error?.email}</span>
          </div>
          <div class="form-group text-left">
            <input
              type={passwordType}
              name="password"
              value={input.password}
              onChange={inputChange}
              class="form-control"
              id="password"
              placeholder="Password"
            />
            <span style={{ color: "red" }}>{error?.password}</span>
          </div>
          <div class="form-group text-left form-check">
            <input
              onClick={TogglePasswordType}
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Show Password
            </label>
          </div>
          <div className="text-left">
            <button type="submit" class="btn form-control btn-sm btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
