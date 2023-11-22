import React from "react";
import { Navigate } from "react-router-dom";
import ROUTE from "../routes/route";
import { useAuth } from "../provider/AuthProvider";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  //   todo: add other logical authentication verification
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <Navigate to={ROUTE.LOGIN} />;
};

export default AuthGuard;
