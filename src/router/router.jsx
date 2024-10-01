import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Content from "../components/Content";
import Technicals from "../components/pages/Technicals/Technicals ";
import Fundamentals from "../components/pages/Fundamentals/Fundamentals";
import SignInPage from "../layout/SignInPage";
import SignUpPage from "../layout/SignUpPage";
import AuthGuard from "../AuthGuard/AuthGuard ";
import UserProfilePage from "../layout/UserProfilePage";

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
        element: (
          <AuthGuard>
            <Technicals />
          </AuthGuard>
        ),
      },
      {
        path: "/fundamentals",
        element: (
          <AuthGuard>
            <Fundamentals />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/profile",
    element: <UserProfilePage />,
  },
]);
