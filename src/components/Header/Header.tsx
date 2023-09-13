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
          <a
            href="https://github.com/Shraddha-V22/component-library"
            target="_blank"
            className="github_link"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </nav>
      </div>
    </header>
  );
}
