import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, firestore, firestorage } from "../firebase-config";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
// import { addDoc, query, where, collection, getDocs } from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import images from "../assets";
// import { useNavigate } from "react-router-dom";

const defaultCtx = {
  firstName: "",
  secondName: "",
  email: "",
  password: "",

  logout: () => {},
  signUp: () => {},
  login: () => {},

  // uploading stories
  // uploadStory: () => {},
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
  const [storyUploaded, setStoryUploaded] = useState(false);

  const signup = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      console.log(error)
    );
    await updateProfile(auth.currentUser, { displayName: name }).catch(
      (error) => console.log(error)
    );
  };

  const login = (email, password) => {
    // return signInWithEmailAndPassword(auth, email, password);
    signInWithEmailAndPassword(auth, email, password).then((credential) => {
      setCurrentUser(credential.user);
    });
  };

  const logout = () => {
    return signOut(auth);
  };

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
            setStoryUploaded(true);
          });
        });
      }
    );
  };

  const deleteStory = async (cardId) => {
    return deleteDoc(doc(firestore, "stories", cardId));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
        stories,
        uploadStory,
        deleteStory,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
