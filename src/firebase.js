// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRvWwW2osHBz4ClJxuuums9GX4fcAQgUw",
  authDomain: "image-uploader-87c5d.firebaseapp.com",
  projectId: "image-uploader-87c5d",
  storageBucket: "image-uploader-87c5d.appspot.com",
  messagingSenderId: "61109124034",
  appId: "1:61109124034:web:2ee65e3e4b81ba38ce345b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);