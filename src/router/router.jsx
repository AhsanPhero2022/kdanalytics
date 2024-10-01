import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Content from "../components/Content";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{ path: "/", element: <Content /> }],
  },
]);
