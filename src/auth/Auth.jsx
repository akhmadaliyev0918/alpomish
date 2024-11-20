import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCer9mtRbIF03dInAjO_LiXrELgGDZRobI",
    authDomain: "edushop-a961d.firebaseapp.com",
    projectId: "edushop-a961d",
    storageBucket: "edushop-a961d.firebasestorage.app",
    messagingSenderId: "571877269921",
    appId: "1:571877269921:web:0d36b52b781f49c90e6be0",
    measurementId: "G-HY0L9KWE4V"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
