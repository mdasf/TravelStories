import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase-config";

const PrivateRoute = ({ children }) => {
  // console.log("inside privateroute");
  // console.log(auth);
  if (!auth.currentUser) {
    console.log("not authorized");
    return <Navigate to="/login" replace />;
  } else return children;
};

export default PrivateRoute;
