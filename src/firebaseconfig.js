import firebase from 'firebase/app';
import 'firebase/firestore';
// this helps us with data base
import 'firebase/auth'
// this is for authenticati

var firebaseConfig = {
   apiKey: "AIzaSyDvSwzz5atriENwh07qWRSSaaNHersXP9s",
   authDomain: "projectp-82f64.firebaseapp.com",
   databaseURL: "https://projectp-82f64.firebaseio.com",
   projectId: "projectp-82f64",
   storageBucket: "projectp-82f64.appspot.com",
   messagingSenderId: "629997139935",
   appId: "1:629997139935:web:4d8d6bc064ade206e1766a",
   measurementId: "G-LXVWJKVYET"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


  export default firebase
