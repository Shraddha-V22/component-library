import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1>My component library</h1>
      <div>search bar</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/components/all">Components</NavLink>
      </nav>
    </header>
  );
}
