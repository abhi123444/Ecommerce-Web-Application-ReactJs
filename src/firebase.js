
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA3mGWHgew8HZHJH7u1UfthZYT5nYwvKq0",
    authDomain: "ecom-web-640b2.firebaseapp.com",
    projectId: "ecom-web-640b2",
    storageBucket: "ecom-web-640b2.appspot.com",
    messagingSenderId: "1059182608229",
    appId: "1:1059182608229:web:f08050ecf33ea368062b8c"
  };
  
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  export var auth = firebase.auth();
  export var provider = new firebase.auth.GoogleAuthProvider();
  export default db; 