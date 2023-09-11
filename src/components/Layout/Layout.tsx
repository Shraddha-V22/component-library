import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.tsx";
import "./Layout.css";

export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
