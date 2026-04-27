"use client";

import { createContext, useEffect, useState } from "react";

const ToDoContext = createContext();
export default ToDoContext;

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // pobieramy todos z zewnętrznego API przy pierwszym renderze
    fetch("https://szandala.github.io/piwo-api/todos.json")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch(() => alert("We have a fakap")); // błąd sieci
  }, []);

  const markDone = (id) => {
    // tworzymy NOWĄ tablicę ze NOWYM obiektem, co jest zalecane
    const newTodos = todos.map((it) =>
      it.id === id ? { ...it, done: !it.done } : it
    );
    setTodos(newTodos);
  };

  const addNewTodo = (todoText) => {
    const tmpTodo = {
      done: false,
      text: todoText,
      id: crypto.randomUUID(),
    };

    setTodos(todos.concat([tmpTodo]));
  };

  return (
    <ToDoContext.Provider value={{ todos, setTodos, markDone, addNewTodo }}>
      {children}
    </ToDoContext.Provider>
  );
};
