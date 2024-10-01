import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Content from "../components/Content";
import Technicals from "../components/pages/Technicals/Technicals ";
import Fundamentals from "../components/pages/Fundamentals/Fundamentals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/technicals ",
        element: <Technicals />,
      },
      {
        path: "/fundamentals",
        element: <Fundamentals />,
      },
    ],
  },
]);
