import React, { useState, useContext } from "react";
import { AppContext } from "./app-context";

import { Home } from "./index";

import "./Login.css";

const Login = () => {
  const { currentUser, login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      login(email, password);
    } catch (err) {
      setError("Failed to sign in.");
    }
  };

  const loginForm = (
    <div className="loginForm container">
      <h1 className="h1 section-heading">Login</h1>
      <form onSubmit={handleSubmit} className="loginInputForm">
        {error && <p className="error">{error}</p>}
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

        <button className="btn submit">Login</button>
      </form>
    </div>
  );

  return !currentUser ? loginForm : <Home />;
};

export default Login;
