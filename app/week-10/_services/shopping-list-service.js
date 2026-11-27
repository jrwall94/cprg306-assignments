import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

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
