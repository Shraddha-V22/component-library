import { useNavigate } from "react-router-dom";
import "./Home.css";

export function Home() {
  const navigate = useNavigate();

  return (
    <article className="home">
      <section className="hero-section_home">
        <div>
          <h1>My Component Library</h1>
          <p>description</p>
          <button onClick={() => navigate("/components/all")}>
            Get started
          </button>
        </div>
      </section>
    </article>
  );
}
