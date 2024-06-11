import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

type UnProtectedRouteProps = {
  children: ReactElement;
};

const UnProtectedRoute: FC<UnProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to='/' />;
  }

  return children;
};

export default UnProtectedRoute;
