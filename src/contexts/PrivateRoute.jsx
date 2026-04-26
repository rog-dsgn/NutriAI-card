import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <span>Carregando..</span>;
  return user ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;
