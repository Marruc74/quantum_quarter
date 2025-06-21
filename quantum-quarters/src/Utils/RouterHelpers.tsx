import Tavern from "../Areas/Generators/Tavern/Tavern";
import Home from "../Areas/Home/Home";

export const getRoutes = () => {
  return [
    { path: "/", element: <Home /> },
    { path: "/Generators/Tavern", element: <Tavern /> },
  ];
};
