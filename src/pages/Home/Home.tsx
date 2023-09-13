import { useNavigate } from "react-router-dom";
import "./Home.css";

export function Home() {
  const navigate = useNavigate();

  return (
    <article className="home">
      <section className="hero-section_home">
        <div>
          <h1 className="title_home">Bloom UI</h1>
          <p className="desc_home">
            Discover simplicity and efficiency with this comprehensive component
            library. From Avatars to Typography, easily enhance your UI by
            seamlessly integrating our pre-built components, allowing you to
            focus on your content, not code.
          </p>
          <button
            className="btn_common"
            onClick={() => navigate("/components/all")}
          >
            Get started
          </button>
        </div>
      </section>
    </article>
  );
}
