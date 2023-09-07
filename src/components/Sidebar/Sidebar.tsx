import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside>
      <NavLink to="/components/avatar">Avatar</NavLink>
      <NavLink to="/components/alert">alert</NavLink>
      <NavLink to="/components/badge">badge</NavLink>
      <NavLink to="/components/button">card</NavLink>
      <NavLink to="/components/card">card</NavLink>
      <NavLink to="/components/headings">headings</NavLink>
      <NavLink to="/components/image">image</NavLink>
      <NavLink to="/components/text">text</NavLink>
    </aside>
  );
}
