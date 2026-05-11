// komponent statyczny (nie ma własnego stanu, bazuje na przekazanym)
// pokazuje jedno ToDo
export const ToDo = ({ todo, markDone }) => {
  // klasa CSS zależy od tego, czy zadanie jest ukończone
  const cardClass = todo.done ? "todo-done" : "todo-open";

  return (
    <p
      className={`todo-card ${cardClass} cursor-pointer select-none`}
      onClick={() => markDone(todo.id)}
      title={todo.done ? "Kliknij, aby cofnąć" : "Kliknij, aby oznaczyć jako zrobione"}
    >
      {todo.done ? "✓" : " "} {todo.text}
    </p>
  );
};

export default ToDo;
