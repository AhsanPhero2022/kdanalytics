/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

const AuthGuard = ({ children }) => {
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>; // Show a loading message while checking authentication
  }

  return <>{children}</>;
};

export default AuthGuard;
