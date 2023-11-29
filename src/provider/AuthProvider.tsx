import React, { createContext, useContext, useState } from "react";
import AuthService from "../services/auth/authService";

interface IAuthContext {
  isAuthenticated: boolean;
  logedIn: () => void;
  logedOut: () => void;
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  logedIn: () => {},
  logedOut: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthService.isAuthenticated
  );

  const logedIn = () => setIsAuthenticated(true);
  const logedOut = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logedIn, logedOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
