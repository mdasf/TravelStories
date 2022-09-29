import React from "react";
import { Link } from "react-router-dom";

import { AiFillHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

import "./MainHeader.css";

const MainHeader = ({
  currentUser,
  logoutHandler,
  error,
  sidebar,
  setSidebar,
}) => {
  return (
    <header className="header ">
      <div
        className="menu-holder"
        onClick={() => {
          setSidebar(!sidebar);
        }}
      >
        {!sidebar ? (
          <AiOutlineMenu style={{ color: "#94d82d" }} className="menu" />
        ) : (
          <AiOutlineClose style={{ color: "#94d82d" }} className="close" />
        )}
      </div>
      <Link to="/" className="logo">
        TravelStories
      </Link>
      {currentUser && (
        <nav className="navbar ">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/home" className="navbar-link">
                <AiFillHome style={{ color: "#94d82d" }} />
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">
                <FaUsers style={{ color: "#94d82d" }} />
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/story" className="navbar-link">
                <GiAirplaneDeparture style={{ color: "#94d82d" }} />
                Upload Story
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {!currentUser ? (
        <div className="btn-wrapper">
          <Link to="/login" className="btn signup">
            Login
          </Link>
          <Link to="/signup" className="btn signup">
            Create Account
          </Link>
        </div>
      ) : (
        <div className="btn-wrapper">
          <div>
            Welcome..!{" "}
            <span style={{ fontWeight: 500 }}>{currentUser.displayName}</span>
          </div>
          <button onClick={logoutHandler} className="btn signup">
            Logout
          </button>
        </div>
      )}
      {error && <div className="modal">{error}</div>}
    </header>
  );
};

export default MainHeader;
