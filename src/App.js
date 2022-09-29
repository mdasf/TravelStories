import React from "react";

import {
  Home,
  About,
  Story,
  Header,
  Signup,
  Footer,
  Login,
} from "./components";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import PublicHomepage from "./components/PublicHomepage";
// import { AppContext } from "./components/app-context";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./components/Error";

function App() {
  // const { currentUser } = useContext(AppContext);

  return (
    <div>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<PublicHomepage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/story"
            element={
              <PrivateRoute>
                <Story />
              </PrivateRoute>
            }
          />

          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
