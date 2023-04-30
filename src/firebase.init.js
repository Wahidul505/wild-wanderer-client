import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC732C72qYG9np-LorQoN6K7d0VnyE-aTU",
    authDomain: "wild-wanderer-b161c.firebaseapp.com",
    projectId: "wild-wanderer-b161c",
    storageBucket: "wild-wanderer-b161c.appspot.com",
    messagingSenderId: "750003418962",
    appId: "1:750003418962:web:c0219de0528f4e5080ec8b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;