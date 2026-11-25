import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    const items = [];
    if (!userId) {
        return items;
    }

    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const q = query(itemsCollection);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id });
        });
    } catch (error) {
        console.error("Error fetching items:", error);
    }

    return items;
};


export const addItem = async (userId, item) => {
    if (!userId) {
        console.log("User ID is required to add an item.");
        return null;
    }

    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollection, item);
        return {  ...item, id: docRef.id };
    } catch (error) {
        console.error("Error adding item:", error);
        return null;
    }
};

export const deleteItem = async (userId, itemId) => {
    if (!userId || !itemId) {
        console.log("User ID and Item ID are required to delete an item.");
    } try {
    const itemRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemRef);
    } catch (error) {
        console.error("Error deleting item:", error);
    }
};