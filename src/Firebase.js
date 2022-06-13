import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAmN4S4CNfqn7nGRHu8GzRYk7apWbgWPcs",
    authDomain: "disney-fac11.firebaseapp.com",
    projectId: "disney-fac11",
    storageBucket: "disney-fac11.appspot.com",
    messagingSenderId: "295636603228",
    appId: "1:295636603228:web:d2cb5ab69737451a05b199"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;