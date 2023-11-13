import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import Main from "../pages";
import Login from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Main />,
  },
]);

function RouterProvider() {
  return <Router router={router} />;
}

export default RouterProvider;
