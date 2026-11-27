import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Get all items for a user
export const getItems = async (userId) => {
  const items = [];
  const itemsRef = collection(db, "users", userId, "items");
  const itemsQuery = query(itemsRef);
  const querySnapshot = await getDocs(itemsQuery);

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
};

// Add an item and return the new document's id
export const addItem = async (userId, item) => {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
};
