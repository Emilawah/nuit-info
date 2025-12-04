// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqkXBAUbN1N07nNzIQ_sj00UFAjYnDZ64",
    authDomain: "nuit-de-info-sah.firebaseapp.com",
    projectId: "nuit-de-info-sah",
    storageBucket: "nuit-de-info-sah.firebasestorage.app",
    messagingSenderId: "562169128610",
    appId: "1:562169128610:web:77755aa9158490b39f19fb",
    measurementId: "G-66R9ZERY3K"
};

// Initialisation de l'application
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// On initialise la DB et on l'EXPORTE pour l'utiliser ailleurs
export const db = getFirestore(app);

// On peut aussi exporter l'app si besoin plus tard
export default app;