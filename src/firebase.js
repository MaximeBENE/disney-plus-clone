import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDx7yM6p29TIXICwjBMLL8DCmxZvK00T_E",
  authDomain: "disney-31mb.firebaseapp.com",
  databaseURL: "https://disney-31mb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "disney-31mb",
  storageBucket: "disney-31mb.appspot.com",
  messagingSenderId: "942490976116",
  appId: "1:942490976116:web:5e270758d8676e0c24f621",
  measurementId: "G-NZ0WYGEJ70"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
