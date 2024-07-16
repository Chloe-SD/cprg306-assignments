import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems () {
    const itemsCollection = collection(db, "groceries");
    const itemsSnapshot = await getDocs(itemsCollection);
    const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return itemsList;
}

export async function addItem(item) {
    try {
        const docRef = await addDoc(collection(db, "items"), item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw new Error("Failed to add item");
    }
}