import { useState } from "react";
import "./Searchbar.css";
import { componentsUrl } from "../../utils/componentsUrl";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const searchSuggestions = componentsUrl.filter(
    ({ name }) =>
      searchText.length > 0 &&
      name.toLowerCase().includes(searchText.toLowerCase())
  );

  const onSearch = (searchText: string) => {
    const matchedComponent = componentsUrl.find(
      ({ name }) => name.toLowerCase() === searchText.toLowerCase()
    );
    if (matchedComponent) {
      navigate(matchedComponent.path);
      setSearchText("");
    } else {
      navigate(`/${searchText}`);
      setSearchText("");
    }
  };

  const searchOnEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <div className="search">
      <div className="search_bar">
        <input
          className="search_input"
          type="text"
          placeholder="Search components..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyDown={searchOnEnter}
        />
        <button className="btn_common" onClick={() => onSearch(searchText)}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {searchText.length > 0 && (
        <ul className="search_suggestion">
          {searchSuggestions.slice(0, 3).map((component) => (
            <li
              onClick={() => {
                navigate(component.path);
                setSearchText("");
              }}
            >
              {component.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
