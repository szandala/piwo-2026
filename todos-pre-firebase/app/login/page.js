export default function LoginPage() {
  return (
    <section className="flex flex-col w-full gap-3">
      <button className="menu tw-button">Kontynuuj z Google</button>

      <hr className="my-1.5" />

      <label className="flex flex-col gap-1.5">
        <input
          type="email"
          className="todo-input"
          placeholder="email"
          autoComplete="email"
        />
      </label>

      <div className="flex flex-col gap-1.5">
        <input
          type="password"
          className="todo-input"
          placeholder="••••••••"
          autoComplete="current-password"
        />
      </div>

      <button className="menu tw-button">Zaloguj się</button>

      <p className="text-center text-sm text-gray-400 mt-1">
        Nie masz konta?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Zarejestruj się
        </a>
      </p>
    </section>
  );
}
