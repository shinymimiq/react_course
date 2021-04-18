import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA-Vy38xju-XgPx9NTItKYHgL5PrwdUV44",
  authDomain: "react-course-bb3af.firebaseapp.com",
  projectId: "react-course-bb3af",
  storageBucket: "react-course-bb3af.appspot.com",
  messagingSenderId: "219725863882",
  appId: "1:219725863882:web:8f659be5cea9b4acc68d33"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth utils
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;