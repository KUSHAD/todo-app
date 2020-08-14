import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgsBtJvzY-7H9alhQEhv7i-6V1hOHjKSA",
    authDomain: "todo-auth-cf98d.firebaseapp.com",
    databaseURL: "https://todo-auth-cf98d.firebaseio.com",
    projectId: "todo-auth-cf98d",
    storageBucket: "todo-auth-cf98d.appspot.com",
    messagingSenderId: "197554278316",
    appId: "1:197554278316:web:fc5fc57c7802db09cb3409"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
