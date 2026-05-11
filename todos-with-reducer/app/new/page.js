"use client";

import { useContext, useState, useRef, useEffect } from "react";
import ToDoContext from "../_contexts/ToDoContext";

const New = () => {
  const { addNewTodo } = useContext(ToDoContext);
  const [text, setText] = useState("");
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(""); // komunikat walidacji

  const number = useRef(0);
  number.current += 1;
  console.log(`Reload ${number.current}`);

  const newTodoRef = useRef();
  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const handleAdd = () => {
    console.log(newTodoRef.current.value);
    // nie dodajemy pustych lub samych spacji
    if (!newTodoRef.current.value.trim()) {
      setError("Treść todo nie może być pusta!");
      return;
    }
    setError("");

    addNewTodo(newTodoRef.current.value.trim());
    // setText(""); // czyścimy pole po dodaniu
    newTodoRef.current.value = "";
    showToast();
  };

  const handleKeyDown = (e) => {
    // Enter działa tak samo jak kliknięcie przycisku, wygodniejsze UXowo
    if (e.key === "Enter") handleAdd();
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  console.log(`count == ${count}`);

  return (
    <section className="flex flex-col w-full gap-2">
      <h2 className="font-bold text-lg">Nowe TODO</h2>
      <input
        // value={text}
        // onChange={(e) => setText(e.target.value)}
        ref={newTodoRef}
        onKeyDown={handleKeyDown}
        className="todo-input"
        placeholder="Co masz do zrobienia?"
      />
      {/* błąd walidacji widoczny pod inputem, użwam Tailwinda */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleAdd}
        className="self-start px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Dodaj
      </button>
      {toast && <div className="toast">✅ Dodano pomyślnie!</div>}
    </section>
  );
};

export default New;
