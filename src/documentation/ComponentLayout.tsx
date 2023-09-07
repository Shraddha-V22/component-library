import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar.tsx";

export default function ComponentLayout() {
  return (
    <article>
      <Sidebar />
      <Outlet />
    </article>
  );
}
