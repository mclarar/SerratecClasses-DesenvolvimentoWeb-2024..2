import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export function Layout() {
  return (
    <>
      <Navbar />
      {/* Componente específico de cada página */}
      <main>
        <Outlet />
      </main>
      <footer>Aqui é o meu footer</footer>
    </>
  );
}
