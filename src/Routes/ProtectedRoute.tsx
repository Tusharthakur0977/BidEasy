import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

type ProtectedRouteProps = {
  children: ReactElement;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAppSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to='/auth/signin' />;
  }

  return children;
};

export default ProtectedRoute;
