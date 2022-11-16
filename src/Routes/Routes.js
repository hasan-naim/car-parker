import { createBrowserRouter } from "react-router-dom";
import Main from "../compnents/Layouts/Main";
import Home from "../pages/Home";
import Park from "../pages/Park";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/park",
        element: <Park />,
      },
    ],
  },
]);

export default router;
