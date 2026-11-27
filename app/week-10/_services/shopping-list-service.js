import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";

export async function getItems(userId) {
  try {
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q);

    const itemList = querySnapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));

    return itemList;
  } catch (error) {
    console.error("Error getting items: ", error);
    throw error;
  }
}

export async function addItem({ userId, item }) {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), {
      ...item,
    });

    return docRef.id;
  } catch (error) {
    console.error("Error adding item: ", error);
  }
}

export async function deleteItem({ userId, itemId }) {
  try {
    const docRef = await deleteDoc(doc(db, "users", userId, "items", itemId));
    return docRef;
  } catch (error) {
    console.error("Error removing item: ", error);
    throw error;
  }
}
