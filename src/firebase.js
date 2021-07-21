import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOe2KBXRuDZM63D4CWq_wqTyGLe6ZMQCE",
    authDomain: "clone-d4dcc.firebaseapp.com",
    projectId: "clone-d4dcc",
    storageBucket: "clone-d4dcc.appspot.com",
    messagingSenderId: "424746313455",
    appId: "1:424746313455:web:a083095679cb52a2361d1a",
    measurementId: "G-2CQYDQJ3CN"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };