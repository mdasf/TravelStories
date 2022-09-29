import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "./app-context";

import images from "../assets";
import "./Signup.css";

const Signup = () => {
  const { signup } = useContext(AppContext);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      let name = firstName.concat(" ", lastName);
      await signup(name, email, password);
      navigate("/home");
    } catch (err) {
      setError("Failed to create account.");
    }
  };

  return (
    <div className="container signupForm ">
      <h1 className="h1 section-heading">Create Account</h1>
      <div className="signup-wrapper">
        <div>
          <form onSubmit={handleSubmit} className="signupInputForm">
            {error && <p className="error">{error}</p>}

            <div className="input-group">
              <input
                type="text"
                id="firstname"
                placeholder="FirstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
              <label htmlFor="firstname">FirstName</label>
            </div>
            <div className="input-group">
              <input
                type="text"
                id="lastname"
                placeholder="LastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
              <label htmlFor="lastname">LastName</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            <button type="submit" className="btn submit">
              Submit
            </button>
          </form>
        </div>
        {/* <div className="img-holder">
          <img src={images.img4} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
