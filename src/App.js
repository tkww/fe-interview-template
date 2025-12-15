import { useState, useEffect } from "react";
import API from "./api";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [themes, setThemes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchThemes, setThemesInput] = useState("");

  useEffect(() => {
    API.getThemes().then((res) => {
      setThemes(res.data.data.familyThemes);
    });
  });

  const themeResults = [];
  for (let i = 0; i < themes.length; i++) {
    const familyGroup = themes[i];
    const individualThemes = familyGroup.themes;

    for (let j = 0; j < individualThemes.length; j++) {
      const theme = individualThemes[j];

      if (searchThemes || searchInput) {
        if (
          searchThemes &&
          familyGroup.family &&
          familyGroup.family.match(searchThemes)
        ) {
          themeResults.push(<Card themeResults={theme} />);
        } else if (searchInput && theme.name && theme.name.match(searchInput)) {
          themeResults.push(<Card themeResults={theme} />);
        }
      } else {
        themeResults.push(<Card themeResults={theme} />);
      }
    }
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <h1 className="text">Products</h1>
        </div>
      </div>
      <div className="container search">
        <form>
          <label>
            Search:
            <input
              type="text"
              name="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
        </form>
        <label for="type">Choose a product type:</label>
        <select onChange={(e) => setThemesInput(e.target.value)}>
          <option value="family">Family</option>
          <option value="color">Color</option>
        </select>
      </div>

      <div className="container">
        <h1>Results: </h1>
        <div className="results">{themeResults}</div>
      </div>
      <div style={{ borderTop: "1px solid #ccc" }} className="footer">
        {" "}
        <div className="container">
          <p>Built with love ❤️</p>
        </div>
      </div>
    </>
  );
}

export default App;
