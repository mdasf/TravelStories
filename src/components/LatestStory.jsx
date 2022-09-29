import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { StoryCard } from "./index";

import { AppContext } from "./app-context";
import "./LatestStory.css";

const LatestStory = ({
  stories,
  sectionTitle,
  personal,
  deleteCardHandler,
}) => {
  const { deleteStory } = useContext(AppContext);

  let bgColor = "";
  let borderTop = "";
  if (sectionTitle.toLowerCase().includes("personel")) {
    bgColor = "#fff";
    borderTop = "1px solid rgba(148, 216, 45, 0.415)";
  }

  const handleCardDelete = async (cardId) => {
    await deleteStory(cardId);
    deleteCardHandler();
  };

  return (
    <div
      className="container home"
      style={{ backgroundColor: bgColor, borderTop: borderTop }}
    >
      <h1 className="h1 section-heading">{sectionTitle}</h1>
      <div className="story-cards">
        {stories ? (
          stories.map((story) => (
            <StoryCard
              key={story?.id}
              id={story?.id}
              image={story?.imageUrl}
              title={story?.title}
              text={story?.text}
              personalStory={personal}
              handleCardDelete={handleCardDelete}
            />
          ))
        ) : (
          <Link to="/story" className="btn" style={{ padding: "1em 3em" }}>
            Upload
          </Link>
        )}
      </div>
    </div>
  );
};

export default LatestStory;
