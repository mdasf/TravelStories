import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./app-context";

import images from "../assets";
import "./GeneralHeader.css";

const GeneralHeader = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <div className=" general-header">
      <div className="general-banner">
        <img src={images.img5} alt="general banner" />
      </div>
      <div className="general-content-wrapper">
        <div className="general-content">
          <h3 className="general-subtitle">
            Travel the world and make your stories
          </h3>
          <h1 className="h1 general-title">
            There is nothing more
            <span>fascinating and joyful</span> then wondering around the world.
          </h1>
          <p className="general-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At est sunt
            eius dolor.
          </p>
          {!currentUser && (
            <Link to="/signup" className="btn">
              Create Account
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
