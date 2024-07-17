//week-10/_services/shopping_list_service.js
import { db } from "../_utils/firebase";
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
    onSnapshot,
  } from "firebase/firestore";

export const getItems = (userId, callback) => {
    const itemsCollection = collection(db, "users", userId, "items");
    return onSnapshot(itemsCollection, (snapshot) => {
        const itemsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        callback(itemsList);
    });
};

export const addItem = async (userId, item) => {
    try {
        const updateItem = { ...item, quantity: item.quantity, category: item.category };
        const newItem = await addDoc(
        collection(db, "users", userId, "items"),
        updateItem
        );
    
        return newItem.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw new Error("Failed to add item");
    }
};

export const deleteItem = async (userId, itemId) => {
    try {
        const docRef = doc(db, "users", userId, "items", itemId);
        await deleteDoc(docRef);

    } catch (error) {
        console.error("Error deleting item: ", error);
        throw new Error("Failed to delete item");
    }
}