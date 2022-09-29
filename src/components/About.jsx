import React from "react";
import { GeneralHeader } from "./index";

import images from "../assets";
import "./About.css";

function About() {
  return (
    <div className="section about">
      <GeneralHeader />

      <div className="container amazing-places">
        <h1 className="h1 section-heading">Amazing Places</h1>
        <ul className="place-list">
          <li className="place-list-item">
            <img src={images.imgthumbnail1} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail2} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail3} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail4} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail5} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail2} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail3} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail1} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail2} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail3} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail5} alt="amazing place" />
          </li>
          <li className="place-list-item">
            <img src={images.imgthumbnail2} alt="amazing place" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
