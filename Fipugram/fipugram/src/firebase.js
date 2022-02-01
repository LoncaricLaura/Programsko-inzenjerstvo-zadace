import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBtC_1aYJUvqRrzfvrYOst8hH5WD2v0OVs",
    authDomain: "fipugram-d05dc.firebaseapp.com",
    projectId: "fipugram-d05dc",
    storageBucket: "fipugram-d05dc.appspot.com",
    messagingSenderId: "1671815322",
    appId: "1:1671815322:web:742d1c997cba80dc7e7f23"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let storage = firebase.storage();

export {
    firebase,
    db,
    storage,
};
