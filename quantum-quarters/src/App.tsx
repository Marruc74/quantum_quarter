import "./App.css";
import { Provider } from "react-redux";
import Header from "./Components/Navigation/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./Components/Navigation/Redux/Store";
import { getRoutes } from "./Utils/RouterHelpers";
import "primeflex/primeflex.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { useState } from "react";

function App() {
  const routes = getRoutes();
  const [theme, setTheme] = useState("default");

  // Determine the theme class
  const themeClass = theme === "theme-dark" ? "theme-dark" : "";

  return (
    <Provider store={store}>
      <Header />
      <div>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{ margin: "16px" }}
        >
          <option value="default">Default</option>
          <option value="theme-dark">Dark</option>
        </select>
        Theme: {themeClass}
        <div className={`card2 ${themeClass}`}>
          <BrowserRouter>
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
}

export default App;
