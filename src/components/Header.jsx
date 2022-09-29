import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Sidebar, MainHeader } from "./index";

import { AppContext } from "./app-context";

const Header = () => {
  const { currentUser, logout } = useContext(AppContext);
  const [error, setError] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      logout();
      navigate("/");
    } catch {
      setError("Logout Failed.");
    }
  };

  return (
    <>
      <MainHeader
        logoutHandler={logoutHandler}
        currentUser={currentUser}
        error={error}
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
      {sidebar && (
        <Sidebar
          logoutHandler={logoutHandler}
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
      )}
    </>
  );
};

export default Header;
