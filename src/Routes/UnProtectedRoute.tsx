import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

type UnProtectedRouteProps = {
  children: ReactElement;
};

const UnProtectedRoute: FC<UnProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, userType } = useAuth();

  if (isAuthenticated) {
    if (userType === 'rfq') {
      return <Navigate to='/rfq/dashboard' />;
    }
    if (userType === 'vendor') {
      return <Navigate to='/vendor/dashboard' />;
    }
  }

  return children;
};

export default UnProtectedRoute;
