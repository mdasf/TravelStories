import React, { useState } from "react";

import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

const StoryCard = ({
  id,
  image,
  title,
  text,
  personalStory,
  handleCardDelete,
}) => {
  const [cardId, setCardId] = useState(id);

  const handleDeleteBtn = () => {
    handleCardDelete(cardId);
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
      {personalStory === "true" ? (
        <div className="wrapper" onClick={handleDeleteBtn}>
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
