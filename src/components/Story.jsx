import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "./app-context";

import "./Story.css";

function Story() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [storyContent, setStoryContent] = useState("");
  const [storyUploading, setStoryUploading] = useState(false);

  const [error, setError] = useState("");
  const { uploadStory } = useContext(AppContext);
  const navigate = useNavigate();

  const uploadHandler = async (e) => {
    e.preventDefault();
    setStoryUploading(true);
    // console.log("inside uploadhandler");
    if (!file) alert("Please Upload poster image for the story.");
    try {
      await uploadStory(title, storyContent, file);
      setStoryUploading(false);

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container story">
      <h1 className="h1 section-heading">
        Write Your <span>Wonderful</span> And <span>Adventures</span> Journey
        Here.
      </h1>
      {error && <p>{error}</p>}
      <form onSubmit={uploadHandler} className="upload-story">
        <div className="input-group">
          <input
            type="text"
            className="w-100"
            placeholder="Story Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group textarea">
          <textarea
            className="w-100"
            placeholder="Your Wonderful Story goes here..."
            value={storyContent}
            onChange={(e) => setStoryContent(e.target.value)}
          />
        </div>
        <div className="input-group ">
          <input
            type="file"
            className="w-100"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button className="upload" disabled={storyUploading}>
          Upload
        </button>
      </form>
    </div>
  );
}

export default Story;
