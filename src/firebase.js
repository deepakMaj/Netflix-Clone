import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA6s_TjUuD9cSNeEU1O97cF6snLUg9A3M0",
  authDomain: "netflix-clone-1999.firebaseapp.com",
  databaseURL: "https://netflix-clone-1999.firebaseio.com",
  projectId: "netflix-clone-1999",
  storageBucket: "netflix-clone-1999.appspot.com",
  messagingSenderId: "284981440445",
  appId: "1:284981440445:web:94b1d590a72bbc52132cd4"
};

// Intialize the firebase app
firebase.initializeApp(firebaseConfig);

// Export auth
export const auth = firebase.auth();

// Sign In with Google
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
}

// Sign Out
export const signOut = () => {
  auth.signOut();
}