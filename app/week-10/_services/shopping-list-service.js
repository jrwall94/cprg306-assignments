import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Reads every item stored at users/{userId}/items
export const getItems = async (userId) => {
  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(query(itemsRef));

  // Firestore keeps the doc id separate from its fields, so merge them
  const items = [];
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
};

// Saves one item to users/{userId}/items and returns its new Firestore id
export const addItem = async (userId, item) => {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
};