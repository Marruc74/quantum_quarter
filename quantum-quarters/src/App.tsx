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

function App() {
  const routes = getRoutes();

  return (
    <Provider store={store}>
      <div className="card">
        <Header />
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
