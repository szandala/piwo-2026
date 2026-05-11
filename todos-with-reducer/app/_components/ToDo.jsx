
// komponent statyczny (nie ma własnego stanu, bazuje na przekazanym)

import { useFavourites } from "../_contexts/FavouritesContext";

// pokazuje jedno ToDo
export const ToDo = ({ todo, markDone }) => {
  // klasa CSS zależy od tego, czy zadanie jest ukończone
const cardClass = todo.done ? "todo-done" : "todo-open";
  const { isFavourite, toggleFavourite } = useFavourites();

  return (
    <p
      className={`todo-card ${cardClass} cursor-pointer select-none`}
      // onClick={() => markDone(todo.id)}
      title={todo.done ? "Kliknij, aby cofnąć" : "Kliknij, aby oznaczyć jako zrobione"}
    >
      {todo.done ? "✓" : " "} {todo.text}
      <button onClick={() => toggleFavourite(todo)}>
        {isFavourite(todo) ? "⭐" : "☆"}
      </button>
    </p>
  );
};

export default ToDo;
