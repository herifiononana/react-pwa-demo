import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import Main from "../pages";
import Login from "../pages/login";
import ROUTE from "./route";
import AuthGuard from "../guards/AuthGuard";
import Home from "../pages/home";
import Products from "../pages/products";

export const router = createBrowserRouter([
  {
    path: ROUTE.LOGIN,
    element: <Login />,
  },
  {
    element: <AuthGuard children={<Main />} />,
    children: [
      {
        path: ROUTE.HOME,
        element: <AuthGuard children={<Home />} />,
      },
      {
        path: ROUTE.PRODUCTS,
        element: <AuthGuard children={<Products />} />,
      },
    ],
  },
]);

function RouterProvider() {
  return <Router router={router} />;
}

export default RouterProvider;
