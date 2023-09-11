import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar.tsx";

export default function ComponentLayout() {
  return (
    <div className="component_docs_page">
      <Sidebar />
      <Outlet />
    </div>
  );
}
