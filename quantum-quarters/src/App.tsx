import "./App.css";
import "./themes.css";
import { Provider } from "react-redux";
import Header from "./Components/Navigation/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store, useAppSelector, type RootState } from "./Redux/Store";
import { getRoutes } from "./Utils/RouterHelpers";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { useEffect } from "react";
import type { FullState } from "./Redux/Types/Store";

function App() {
  const routes = getRoutes();

  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContent routes={routes} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

function AppContent({ routes }: { routes: ReturnType<typeof getRoutes> }) {
  const { theme } = useAppSelector(
    (state: RootState) => (state as FullState).base
  );

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <>
      <Header />
      <div>
        Theme: {theme}
        <div className={`card2`}>
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>
    </>
  );
}
