import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCi0WWkmNgUWU5UcA10lbkLm9KGJlNjblA",
  authDomain: "fir-recipes-13aa0.firebaseapp.com",
  projectId: "fir-recipes-13aa0",
  storageBucket: "fir-recipes-13aa0.appspot.com",
  messagingSenderId: "77822117208",
  appId: "1:77822117208:web:9ad341b64af10e661c112d",
  measurementId: "G-DS3X512VME"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
