import React, { useContext } from "react";

import { LatestStory, UploadYourOwnStory, GeneralHeader } from "./index";
import { AppContext } from "./app-context";

import "./Home.css";

const PublicHomepage = () => {
  const { stories } = useContext(AppContext);
  return (
    <>
      <GeneralHeader />
      <LatestStory stories={stories} sectionTitle="Trending Stories" />
      <UploadYourOwnStory />
    </>
  );
};

export default PublicHomepage;
