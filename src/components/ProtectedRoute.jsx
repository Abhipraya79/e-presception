import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, userType }) => {
  const isAuthenticated = sessionStorage.getItem(`${userType}Authenticated`);
  
  if (!isAuthenticated) {
    return <Navigate to={`/${userType}/login`} replace />;
  }

  return children;
};

export default ProtectedRoute;