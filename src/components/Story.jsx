import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestorage, firestore } from "../firebase-config";

import { AppContext } from "./app-context";

import "./Story.css";

function Story() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [storyContent, setStoryContent] = useState("");
  const [storyUploading, setStoryUploading] = useState(false);

  const [error, setError] = useState("");
  const { currentUser } = useContext(AppContext);
  const navigate = useNavigate();

  const uploadStory = async (title, storyContent, file) => {
    // First upload image to Firebase Storage and get imageUrl

    const storageRef = ref(firestorage, `images/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      () => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);

          const storyCollectionRef = collection(firestore, "stories");
          addDoc(storyCollectionRef, {
            title: title,
            storyContent: storyContent,
            ownerId: currentUser.email,
            imageUrl: downloadURL,
          }).then(() => {
            setStoryUploading(false);
          });
        });
      }
    );
  };

  const uploadHandler = (e) => {
    e.preventDefault();
    if (!file) alert("Please Upload poster image for the story.");
    try {
      setStoryUploading(true);
      uploadStory(title, storyContent, file);
    } catch (err) {
      setError(err.message);
    }

    setTimeout(() => {
      !storyUploading && navigate("/home");
    }, 2000);
  };

  return (
    <>
      {" "}
      <div className={`container story ${storyUploading ? "active" : ""}`}>
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
        <div className="loading upload-modal">
          <p>
            Your story is uploading...do not{" "}
            <span>refresh or press back button</span>. You will be{" "}
            <span>redireced&nbsp;</span>
            shortly..
          </p>
        </div>
      </div>
    </>
  );
}

export default Story;
