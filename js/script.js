import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { db } from "./firebase-config.js";

async function ajouterUtilisateur(nom, age) {
    try {
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
// exemple pour ajouter une utilisateur
// ajouterUtilisateur("Alice", 25);