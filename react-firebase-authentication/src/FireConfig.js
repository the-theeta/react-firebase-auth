import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDdz2oSiUgXMoWey-EIm2-edPht6Y30Ma8",
  authDomain: "react-firebase-authentic-b26cf.firebaseapp.com",
  databaseURL: "https://react-firebase-authentic-b26cf.firebaseio.com",
  projectId: "react-firebase-authentic-b26cf",
  storageBucket: "react-firebase-authentic-b26cf.appspot.com",
  messagingSenderId: "559785689354",
});

export default app;
