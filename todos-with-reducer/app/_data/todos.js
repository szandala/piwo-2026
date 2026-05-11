import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firestore } from "./init";

const todosCol = (userId) => collection(firestore, "users", userId, "todos");

export const fetchTodos = async (userId) => {
  if (!userId) return [];
  const snapshot = await getDocs(todosCol(userId));

  // zamieniamy dokumenty Firestore na zwykłe obiekty JSa
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addTodo = async (userId, todoText) => {
  const docRef = await addDoc(todosCol(userId), {
    text: todoText,
    done: false,
    createdAt: serverTimestamp(), // czas z serwera, nie z przeglądarki
  });

  // zwracamy obiekt gotowy do wrzucenia w lokalny stan
  return { id: docRef.id, text: todoText, done: false };
};

export const updateTodo = async (userId, todo, changes) => {
  // changes to obiekt z polami do nadpisania, np. { done: true } lub { text: "..." }
  const ref = doc(db, "users", userId, "todos", todo.id);
  await updateDoc(ref, changes);
};
