import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, deleteDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];
  if (!userId) return items;

  try {
    // Reference the "items" subcollection inside users/{userId}
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    console.error("Error fetching items: ", error);
  }

  return items;
};

export const addItem = async (userId, item) => {
  if (!userId) return null;

  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
    return null;
  }
};

export const deleteItem = async (userId, itemId) => {
  try {
    const itemRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemRef);
  } catch (error) {
    console.error("Error deleting item: ", error);
  }
};