import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => (
  <div className="container footer">
    <div className="footer-top ">
      <ul className="footer-list">
        <li className="footer-list-item address">
          <Link to="/" className="logo footer-logo">
            TravelStories
          </Link>
          <span>Building No-20, Sector-32, Delhi NCR</span>
          <span>asifmohd1146@gmail.com</span>
          <span>723823283</span>
        </li>
        <li className="footer-list-item links">
          <p>Important Links</p>
          <ul className="footer-nav">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/about" className="footer-link">
              About
            </Link>
            <Link to="/story" className="footer-link">
              Story
            </Link>
            <Link to="/signup" className="footer-link">
              Signup
            </Link>
          </ul>
        </li>
        <li className="footer-list-item newsletter">
          <input type="text" placeholder="Enter email..." className="w-100" />
          <button className="btn subscribe">Subscribe Newsletter</button>
        </li>
      </ul>
    </div>
    <div className="footer-bottom ">
      <p>2022, &copy;asif All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
