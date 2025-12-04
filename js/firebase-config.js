import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBqkXBAUbN1N07nNzIQ_sj00UFAjYnDZ64",
    authDomain: "nuit-de-info-sah.firebaseapp.com",
    projectId: "nuit-de-info-sah",
    storageBucket: "nuit-de-info-sah.firebasestorage.app",
    messagingSenderId: "562169128610",
    appId: "1:562169128610:web:77755aa9158490b39f19fb",
    measurementId: "G-66R9ZERY3K"
};

// Initialisation
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Connexion anonyme automatique (obligatoire pour écrire)
signInAnonymously(auth).then(() => {
    console.log("Connecté anonymement");
}).catch((error) => {
    console.error("Erreur de connexion", error);
});