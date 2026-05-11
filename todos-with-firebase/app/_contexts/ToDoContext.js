"use client";

import { createContext, useEffect, useState } from "react";
import { addTodo, fetchTodos } from "../_data/todos";
import useUser from "../_data/useUser";

const ToDoContext = createContext();
export default ToDoContext;

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const user = useUser();

  useEffect(() => {
    // pobieramy todos z zewnętrznego API przy pierwszym renderze
    // fetch("https://szandala.github.io/piwo-api/todos.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setTodos(data);
    //   })
    //   .catch(() => alert("We have a fakap")); // błąd sieci

    fetchTodos(user?.uid).then((d) => setTodos(d));
  }, [user]);

  const markDone = (id) => {
    // tworzymy NOWĄ tablicę ze NOWYM obiektem, co jest zalecane
    const newTodos = todos.map((it) =>
      it.id === id ? { ...it, done: !it.done } : it
    );
    setTodos(newTodos);
  };

  const addNewTodo = (todoText) => {
    addTodo(user.uid, todoText).then((todo) => setTodos(todos.concat([todo])));
  };

  return (
    <ToDoContext.Provider value={{ todos, setTodos, markDone, addNewTodo }}>
      {children}
    </ToDoContext.Provider>
  );
};
