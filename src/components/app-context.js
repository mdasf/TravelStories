import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase-config";

import images from "../assets";

const defaultCtx = {
  firstName: "",
  secondName: "",
  email: "",
  password: "",

  logout: () => {},
  signUp: () => {},
  login: () => {},
};

export const AppContext = createContext(defaultCtx);

const ContextProvider = (props) => {
  const initialData = [
    {
      id: 1,
      imageUrl: images.imgthumbnail1,
      title: "Dangerous Desert",
      text: "  This journey I could never forget. I cant remember how many times iprayed to god that i just want to be at home....",
    },
    {
      id: 2,
      imageUrl: images.imgthumbnail2,
      title: "High Mountains in Newzealand",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enimdelectus nesciunt iste, natus eius....",
    },
    {
      id: 3,
      imageUrl: images.imgthumbnail3,
      title: "Fly in the Sky",
      text: "Such a adventure it was. I was high on adrenaline. I was living every moment of it. I wanted to take the whole....",
    },
    {
      id: 4,
      imageUrl: images.imgthumbnail4,
      title: "Lost in San Fransisco",
      text: " It was such a surreal experience navigating my way in that environment. I was fully ecstatic...",
    },
    {
      id: 5,
      imageUrl: images.imgthumbnail5,
      title: "Beautiful Homes in Greek",
      text: "Aipisicing elit. Enim delectus nesciunt iste, natus eius....",
    },
  ];
  const [stories, setStories] = useState(initialData);
  const [currentUser, setCurrentUser] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const signup = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      console.log(error)
    );
    await updateProfile(auth.currentUser, { displayName: name }).catch(
      (error) => console.log(error)
    );
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((credential) => {
      setCurrentUser(credential.user);
    });
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    setIsPageLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsPageLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          currentUser,
          signup,
          login,
          logout,
          stories,
          setStories,
        }}
      >
        {isPageLoading ? (
          <div className="loading">
            <p>Loading Page..</p>
          </div>
        ) : (
          props.children
        )}
      </AppContext.Provider>
    </>
  );
};

export default ContextProvider;
