import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";

const firebaseConfig = {
      apiKey: "AIzaSyBiOYSJjrHSS8S5vW1a0N3tOuUjrEluGmM",
      authDomain: "clone-78d9a.firebaseapp.com",
      projectId: "clone-78d9a",
      storageBucket: "clone-78d9a.appspot.com",
      messagingSenderId: "482895857218",
      appId: "1:482895857218:web:c208117932f2e2a6830fdb"
    };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth ,provider};