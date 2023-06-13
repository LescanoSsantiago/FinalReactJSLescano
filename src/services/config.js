import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "mascotienda-chicho.firebaseapp.com",
    projectId: "mascotienda-chicho",
    storageBucket: "mascotienda-chicho.appspot.com",
    messagingSenderId: "1043767827882",
    appId: "1:1043767827882:web:58b415fb44af90b42b5fd3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)