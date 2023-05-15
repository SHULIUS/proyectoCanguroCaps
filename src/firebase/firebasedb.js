import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  "projectId": "authenticationcangucaps",
  "appId": "1:276114174658:web:2a34ae3789f96a95c6815b",
  "storageBucket": "authenticationcangucaps.appspot.com",
  "apiKey": "AIzaSyDE9Hgv2QqcrIjhuR6i8D7uc2Nd_IIkwGU",
  "authDomain": "authenticationcangucaps.firebaseapp.com",
  "messagingSenderId": "276114174658",
  "measurementId": "G-W92SYV1J5N"
});

const db = firebase.firestore();
export { db };
