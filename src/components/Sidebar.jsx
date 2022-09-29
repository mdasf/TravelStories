import React from "react";
import { Link } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = ({ logoutHandler, sidebar, setSidebar }) => {
  const navLinkClickHandler = () => {
    setSidebar(!sidebar);
  };

  const active = sidebar ? "active" : "";

  return (
    <div
      className={`sidebar ${active}`}
      onClick={() => {
        setSidebar(false);
      }}
    >
      <nav className="navbar ">
        <Link to="/" className=" sidebar-logo" onClick={navLinkClickHandler}>
          TravelStories
        </Link>
        <ul className="navbar-list">
          <li className="navbar-item" onClick={navLinkClickHandler}>
            <Link to="/" className="navbar-link">
              <AiFillHome style={{ color: "#94d82d" }} />
              Home
            </Link>
          </li>
          <li className="navbar-item" onClick={navLinkClickHandler}>
            <Link to="/about" className="navbar-link">
              <FaUsers style={{ color: "#94d82d" }} />
              About
            </Link>
          </li>
          <li className="navbar-item" onClick={navLinkClickHandler}>
            <Link to="/story" className="navbar-link">
              <GiAirplaneDeparture style={{ color: "#94d82d" }} />
              Upload Story
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
