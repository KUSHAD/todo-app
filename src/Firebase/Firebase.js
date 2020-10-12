import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzScxvlZ1DHfW4-Y0ZH_aI9E4RlQhOU-c",
    authDomain: "react-to-do-firebase-auth.firebaseapp.com",
    databaseURL: "https://react-to-do-firebase-auth.firebaseio.com",
    projectId: "react-to-do-firebase-auth",
    storageBucket: "react-to-do-firebase-auth.appspot.com",
    messagingSenderId: "718032676506",
    appId: "1:718032676506:web:512d85b174cc62fa64e123",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
