import "./App.css";
import "./themes.css";
import { Provider } from "react-redux";
import Header from "./Components/Navigation/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./Components/Navigation/Redux/Store";
import { getRoutes } from "./Utils/RouterHelpers";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
//theme
import "primereact/resources/themes/lara-light-amber/theme.css";

//core
import "primereact/resources/primereact.min.css";

function App() {
  const routes = getRoutes();

  return (
    <Provider store={store}>
      {/* <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}> */}
      <PrimeReactProvider>
        <Header />
        <div className="card">
          <BrowserRouter>
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </BrowserRouter>
        </div>
        {/* </PrimeReactProvider> */}
      </PrimeReactProvider>
    </Provider>
  );
}

export default App;
