import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Verification } from "../pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
