import * as firebase from "firebase";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCD_ktyahnJNSDMF0HcnlwgL9ngHJmP7zw",
  authDomain: "kafeeladen.firebaseapp.com",
  databaseURL: "https://kafeeladen.firebaseio.com",
  projectId: "kafeeladen",
  storageBucket: "kafeeladen.appspot.com",
  messagingSenderId: "1037030375583"
};

firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
