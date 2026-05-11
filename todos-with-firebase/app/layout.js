import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ToDoProvider } from "./_contexts/ToDoContext";
import LoginButtons from "./_components/LoginButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ToDOs App",
  description: "Prosta aplikacja do zarządzania zadaniami",
};

// layout.js opakowuje KAŻDĄ stronę, idealnie miejsce na nawigację i globalny kontekst
export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="menu">
          <Link href="/">Home</Link>
          <Link href="/new">New</Link>
          <LoginButtons />
        </nav>
        {/* ToDoProvider musi obejmować całe drzewo, żeby kontekst był wszędzie dostępny */}
        <ToDoProvider>
          <main className="flex items-start mx-[25%] mt-4 w-[50%]">
            {children}
          </main>
        </ToDoProvider>
      </body>
    </html>
  );
}
