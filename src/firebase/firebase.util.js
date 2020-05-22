import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCmErfhwTwRDJNQcqX5wuRCFG3D6aWIZLY",
  authDomain: "crwn-db-e7249.firebaseapp.com",
  databaseURL: "https://crwn-db-e7249.firebaseio.com",
  projectId: "crwn-db-e7249",
  storageBucket: "crwn-db-e7249.appspot.com",
  messagingSenderId: "447487482620",
  appId: "1:447487482620:web:311b670f0494bd4dc79579",
  measurementId: "G-M4V751SQMZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;