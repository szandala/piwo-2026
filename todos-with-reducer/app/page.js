"use client";

import { useContext, useState, useMemo, useId } from "react";
import ToDo from "./_components/ToDo";
import TodoContext from "./_contexts/ToDoContext";

const registry = new WeakMap();
let counter = 0;

function getObjectId(obj) {
  if (obj === null || typeof obj !== "object") return null;
  if (!registry.has(obj)) registry.set(obj, ++counter);
  return registry.get(obj);
}

export default function Home() {
  const { todos, markDone } = useContext(TodoContext);

  const [query, setQuery] = useState("");

  // toLowerCase() po obu stronach: szukanie działa bez względu na wielkość liter
  const filteredTodos = todos.filter((it) =>
    it.text.toLowerCase().includes(query.toLowerCase())
  );

  // const filteredTodos = useMemo(
  //   () =>
  //     todos.filter((it) => it.text.toLowerCase().includes(query.toLowerCase())),
  //   [todos, query]
  // );
  console.log(getObjectId(filteredTodos));
  return (
    <section className="flex flex-col w-full">
      <h2 className="font-bold text-lg mb-2">TODOs maker</h2>
      <input
        type="text"
        placeholder="Szukaj todo…"
        className="todo-input mb-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <hr className="my-1.5" />

      {/* komunikat gdy nic nie pasuje do wyszukiwania */}
      {filteredTodos.length === 0 && (
        <p className="text-gray-400 italic mt-2">
          Brak wyników dla &ldquo;{query}&rdquo;
        </p>
      )}

      {filteredTodos.map((it) => (
        <ToDo key={it.id} todo={it} markDone={markDone} />
      ))}
    </section>
  );
}
