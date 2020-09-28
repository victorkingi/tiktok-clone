import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCs-D2fBvipIdHBirkaeExaRyjhYxiaQq4",
    authDomain: "tiktok-clone-5e534.firebaseapp.com",
    databaseURL: "https://tiktok-clone-5e534.firebaseio.com",
    projectId: "tiktok-clone-5e534",
    storageBucket: "tiktok-clone-5e534.appspot.com",
    messagingSenderId: "382386081653",
    appId: "1:382386081653:web:6d051d69d55fc0c167cd3c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
