"use client";
import useUser from "../_data/useUser";
import Link from "next/link";
import { logout } from "../_data/auth";

export default function LoginButtons() {
  const user = useUser();
  if (user) return <div onClick={logout}>Wyloguj</div>;

  return (
    <Link href="/login" className="ml-auto">
      Zaloguj
    </Link>
  );
}
