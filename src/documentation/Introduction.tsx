import { useNavigate } from "react-router-dom";
import { Button } from "../libraryComponents";

export default function Introduction() {
  const navigate = useNavigate();

  return (
    <div className="flex_col max-w-600">
      <div className="container">
        <h1>Introduction</h1>
        <p>
          Welcome to my component library. We're thrilled to present a
          meticulously crafted collection of components that will help you get
          better app development experience.
        </p>
      </div>

      <div className="container">
        <h1>How to use the components:</h1>
        <p>One can copy the given components directly to use the components.</p>
      </div>

      <button
        onClick={() => navigate("/components/avatar")}
        className="btn_common flex"
        style={{ gap: "1rem", marginLeft: "auto" }}
      >
        Avatar <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
