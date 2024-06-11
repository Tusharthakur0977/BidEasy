import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

type ProtectedRouteProps = {
  children: ReactElement;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to='/auth/signin' />;
  }

  return children;
};

export default ProtectedRoute;
