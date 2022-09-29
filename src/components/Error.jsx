import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-wrapper">
      <h1 className="h1 section-heading">
        Error 404
        <br />
        Page do not exist!
      </h1>

      <p>
        Please{" "}
        <a className="link" href="/login">
          Login
        </a>
      </p>
      {/* <div className="btn-wrapper">
        <Link className="btn" to="/login">
          Login
        </Link>
        <Link className="btn" to="/signup">
          Create Account
        </Link>
      </div> */}
    </div>
  );
};

export default Error;
