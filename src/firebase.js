import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3ehCAoqDApBgL6xo7Vit5hzC-yA_giPI",
  authDomain: "clone-aa3f5.firebaseapp.com",
  databaseURL: "https://clone-aa3f5.firebaseio.com",
  projectId: "clone-aa3f5",
  storageBucket: "clone-aa3f5.appspot.com",
  messagingSenderId: "749062060373",
  appId: "1:749062060373:web:4bc77232f336c3bdf117dc",
  measurementId: "G-2Z492WYYXY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
