import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { StoryCard } from "./index";

import "./LatestStory.css";
import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase-config";

const LatestStory = ({
  stories,
  setPersonalStories,
  sectionTitle,
  personal,
}) => {
  const [isDeleted, setIsDeleted] = useState(false);

  // const navigate = useNavigate();

  const deleteStory = async (cardId) => {
    console.log(cardId);
    await deleteDoc(doc(firestore, "stories", cardId));
    setPersonalStories(stories.filter((story) => story.id !== cardId));

    setIsDeleted(true);

    // navigate("/home");
  };

  let bgColor = "";
  let borderTop = "";
  if (sectionTitle.toLowerCase().includes("personal")) {
    bgColor = "#fff";
    borderTop = "1px solid rgba(148, 216, 45, 0.415)";
  }

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
              isPersonal={personal}
              setPersonalStory={setPersonalStories}
              deleteStory={deleteStory}
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
