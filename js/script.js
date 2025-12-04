import { db } from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";

async function ajouterUtilisateur(nom, age) {
    try {
        // On ajoute un document dans la collection "users"
        const docRef = await addDoc(collection(db, "users"), {
            nom: nom,
            age: age,
            dateCreation: new Date()
        });
        console.log("Document écrit avec l'ID : ", docRef.id);
    } catch (e) {
        console.error("Erreur lors de l'ajout : ", e);
    }
}

ajouterUtilisateur("Alice", 25);