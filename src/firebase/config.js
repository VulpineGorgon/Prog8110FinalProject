import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDlYsrUbVSoSHgUUGONc57V3GvfibU4CBY",
    authDomain: "prog8110winter2021-c4be4.firebaseapp.com",
    projectId: "prog8110winter2021-c4be4",
    storageBucket: "prog8110winter2021-c4be4.appspot.com",
    messagingSenderId: "72593607138",
    appId: "1:72593607138:web:35c357a486a18cd60a51bb",
    measurementId: "G-NCJVYW9KMQ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };