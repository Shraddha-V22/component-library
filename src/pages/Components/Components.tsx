import { useNavigate } from "react-router-dom";
import { componentsUrl } from "../../utils/componentsUrl";
import { ComponentUrl } from "../../utils/types";
import "./Components.css";

export function Components() {
  const navigate = useNavigate();
  return (
    <article>
      <section className="components">
        <h3 className="title_components">All components</h3>
        <div className="components_container">
          {componentsUrl.map((comp: ComponentUrl) => (
            <div
              className="component_docs_path btn_common"
              key={comp.id}
              onClick={() => navigate(comp.path)}
            >
              {comp.name}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
