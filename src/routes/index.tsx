import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import Main from "../pages";
import Login from "../pages/login";
import Profil from "../pages/profil";
import ROUTE from "./route";

export const router = createBrowserRouter([
  {
    path: ROUTE.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE.HOME,
    element: <Main />,
  },
  {
    path: ROUTE.PROFIL,
    element: <Profil />,
  },
]);

function RouterProvider() {
  return <Router router={router} />;
}

export default RouterProvider;
