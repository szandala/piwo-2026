"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./init";

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase samo woła callback gdy stan auth się zmieni (login/logout/refresh)
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser); // null jeśli niezalogowany, obiekt User jeśli OK
    });

    return unsubscribe; // cleanup == odsubskrybuj gdy komponent znika
  }, []);

  return user;
};
export default useUser;
