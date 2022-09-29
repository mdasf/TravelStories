import React, { useContext, useEffect, useState } from "react";

import { firestore } from "../firebase-config";
import { query, where, collection, getDocs } from "firebase/firestore";
import { LatestStory, UploadYourOwnStory } from "./index";

import { AppContext } from "./app-context";
import "./Home.css";

const Home = () => {
  const { stories, currentUser, uploadedStory } = useContext(AppContext);
  const [personalStories, setPersonelStories] = useState();
  const [deleteCard, setDeleteCard] = useState(false);

  const promiseForPersonelStories = new Promise(async (resolve, reject) => {
    try {
      const queryPersonelStories = query(
        collection(firestore, "stories"),
        where("ownerId", "==", currentUser?.email)
      );
      let allStories = [];
      const querySnapshot = await getDocs(queryPersonelStories);
      querySnapshot.forEach((doc) => {
        const story = { storyId: doc.id, storyContent: doc.data() };
        allStories.push(story);
      });

      resolve(allStories);
    } catch (error) {
      reject(error);
    }
  });

  const fetchData = () => {
    promiseForPersonelStories
      .then((allStories) => {
        // console.log(allStories);

        allStories = allStories.map(({ storyId, storyContent }) => {
          return {
            id: storyId,
            imageUrl: storyContent.imageUrl,
            title: storyContent.title,
            text: storyContent.storyContent,
          };
        });

        setPersonelStories(allStories);
        // setDeleteCard(false);
        // console.log(allStories);
      })
      .catch((error) => console.log(error));
  };

  const deleteCardHandler = () => {
    setDeleteCard(true);
  };

  useEffect(() => {
    currentUser && fetchData();
    // console.log(uploadedStory);
  }, [currentUser, uploadedStory, deleteCard]);

  return (
    <>
      {currentUser &&
        personalStories &&
        (personalStories.length > 0 ? (
          <LatestStory
            stories={personalStories}
            sectionTitle="Your Personal Stories"
            deleteCardHandler={deleteCardHandler}
            personal="true"
          />
        ) : (
          <LatestStory
            stories={null}
            sectionTitle="You've got no personal stories.. Upload your favourite story..."
          />
        ))}

      <LatestStory
        stories={stories}
        sectionTitle="Latest Travel Stories"
        personal="false"
      />
      <UploadYourOwnStory />
    </>
  );
};

export default Home;
