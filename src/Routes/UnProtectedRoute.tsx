import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

type UnProtectedRouteProps = {
  children: ReactElement;
};

const UnProtectedRoute: FC<UnProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, userType } = useAppSelector((state) => state.user);

  if (isAuthenticated) {
    if (userType === 'BUYER') {
      return <Navigate to='/rfq/dashboard/rfqList' />;
    }
    if (userType === 'VENDOR') {
      return <Navigate to='/vendor/dashboard' />;
    }
  }

  return children;
};

export default UnProtectedRoute;
