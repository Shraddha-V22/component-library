import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { Searchbar } from "..";

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 onClick={() => navigate("/")}>Bloom UI</h1>
      <div>
        <Searchbar />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/components/all">Components</NavLink>
        </nav>
      </div>
    </header>
  );
}
