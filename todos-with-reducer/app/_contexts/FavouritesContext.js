"use client";
import { createContext, useContext, useReducer } from "react";

const favContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.todo];

    case "REMOVE":
      return state.filter((t) => t.id !== action.todo.id);

    case "TOGGLE":
      return state.some((t) => t.id === action.todo.id)
        ? state.filter((t) => t.id !== action.todo.id)
        : [...state, action.todo];

    default:
      throw new Error(`Nieznana akcja = ${action.type}`);
  }
};

export const FavouritesProvider = ({ children }) => {
  const [favourites, dispatch] = useReducer(reducer, []);

  const addFavourite = (todo) => dispatch({ type: "ADD", todo });
  const removeFavourite = (todo) => dispatch({ type: "REMOVE", todo });
  const toggleFavourite = (todo) => dispatch({ type: "TOGGLE", todo });
  const isFavourite = (todo) => favourites.some((t) => t.id === todo.id);

  return (
    <favContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        toggleFavourite,
        isFavourite,
      }}
    >
      {children}
    </favContext.Provider>
  );
};

export function useFavourites() {
  return useContext(favContext);
}

////////////////////////////////////
// import { createContext, useContext, useReducer } from "react";

// const favContext = createContext();

// export const FavouritesProvider = ({ children }) => {
//   const [favourites, dispatch] = useReducer(reducer, []);

//   return <favContext.Provider>{children}</favContext.Provider>;
// };
