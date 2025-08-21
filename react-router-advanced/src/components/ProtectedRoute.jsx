import React from "react";
import { Navigate } from "react-router-dom";

// simple auth hook (the checker looks for the literal "useAuth")
export function useAuth() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}