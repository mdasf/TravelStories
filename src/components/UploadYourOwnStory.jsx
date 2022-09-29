import React, { useContext } from "react";
import { Link } from "react-router-dom";
import images from "../assets";
import { AppContext } from "./app-context";
import { TiTick } from "react-icons/ti";

//  import "./GeneralHeader.css";

import "./UploadYourOwnStory.css";

const UploadYourOwnStory = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <div className=" upload">
      <h1 className="h1 section-heading">Tell Your Own Story</h1>
      <div className=" upload-header">
        <div className="upload-banner">
          <img src={images.img2} alt="upload banner" />
        </div>
        <div className="upload-content-wrapper">
          <div className="upload-content">
            <h3 className="upload-subtitle">Create Your own stories</h3>
            <div className=" upload-title">
              Do you have <span>fascinating travel stories&nbsp;</span>
              to tell ?
            </div>
            <div className="upload-text">
              <div className="steps-wrapper">
                <ul className="steps">
                  <li className="step">
                    <div className="step-number">
                      <TiTick />
                    </div>
                    <p className="step-text">
                      Create your account by filling all the information.
                    </p>
                  </li>
                  <li className="step">
                    <div className="step-number">
                      <TiTick />
                    </div>
                    <p className="step-text">
                      Write all the details about your
                      <span>&nbsp; Travel Story &nbsp;</span>
                      in your words.
                    </p>
                  </li>
                  <li className="step">
                    <div className="step-number">
                      <TiTick />
                    </div>
                    <p className="step-text">Publish your story.</p>
                  </li>
                </ul>
                <p>So Simple !</p>
              </div>
            </div>
            {!currentUser && (
              <Link to="/signup" className="btn">
                Create Account
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadYourOwnStory;
