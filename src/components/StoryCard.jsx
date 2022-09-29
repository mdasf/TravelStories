import React, { useState } from "react";

import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

const StoryCard = ({
  id: cardId,
  image,
  title,
  text,
  deleteStory,
  isPersonal,
}) => {
  const handleCardDelete = () => {
    deleteStory(cardId);
  };

  return (
    <div className="card" data-card-id={cardId}>
      <div className="img-holder">
        <img src={image} alt="img" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <span className="btn card-btn">Read More..</span>
      </div>
      {isPersonal === "true" ? (
        <div className="wrapper" onClick={handleCardDelete}>
          <button className="card-icon">
            <MdOutlineDeleteOutline />
          </button>
        </div>
      ) : (
        <div className="wrapper">
          <button className="card-icon">
            <AiFillHeart style={{ color: "red" }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default StoryCard;
