import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import UnAuthLayout from '../Layout/UnAuthLayout';
import DocsCheckList from '../Pages/DocsCheckList';
import { HelpVideo } from '../Pages/HelpVideo/HelpVideo';
import PageNotFound from '../Pages/PageNotFound';
import PanRegister from '../Pages/PanRegister';
import SetPassword from '../Pages/SetPassword';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Support from '../Pages/Support';
import UserManual from '../Pages/UserManual';
import Account from '../Pages/Vendor/Account';
import BankDetails from '../Pages/Vendor/BankDetails';
import VendorDashboard from '../Pages/Vendor/Dashboard';
import Invoices from '../Pages/Vendor/Invoices';
import Orders from '../Pages/Vendor/Orders';
import ProtectedRoute from './ProtectedRoute';
import UnProtectedRoute from './UnProtectedRoute';
import RfqDashboard from '../Pages/RFQ/RfqDashboard';
import { useAuth } from '../Context/AuthContext';

const Routing = () => {
  const { userType, isAuthenticated } = useAuth();
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Navigate
          to={
            isAuthenticated
              ? userType === 'vendor'
                ? '/vendor'
                : '/rfq'
              : '/auth'
          }
        />
      ),
      errorElement: <PageNotFound />,
    },
    {
      path: '/vendor',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: 'dashboard',
          element: (
            <ProtectedRoute>
              <VendorDashboard />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: 'bank_details',
          element: (
            <ProtectedRoute>
              <BankDetails />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: 'account',
          element: (
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: 'orders',
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: 'invoice',
          element: (
            <ProtectedRoute>
              <Invoices />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: '*',
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: '/rfq',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: 'dashboard',
          element: (
            <ProtectedRoute>
              <RfqDashboard />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: 'company',
          element: (
            <ProtectedRoute>
              <RfqDashboard />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: 'officers',
          element: (
            <ProtectedRoute>
              <RfqDashboard />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: '*',
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: '/auth',
      element: (
        <UnProtectedRoute>
          <UnAuthLayout />
        </UnProtectedRoute>
      ),
      children: [
        {
          path: '/auth/signin',
          element: <SignIn />,
          errorElement: <PageNotFound />,
        },
        {
          path: '/auth/signup',
          element: <SignUp />,
          errorElement: <PageNotFound />,
        },
        {
          path: '/auth/signup/pan',
          element: <PanRegister />,
          errorElement: <PageNotFound />,
        },
        {
          path: '/auth/signup/setpassword',
          element: <SetPassword />,
          errorElement: <PageNotFound />,
        },
      ],
    },
    {
      path: '/user-manual',
      element: <UserManual />,
      errorElement: <PageNotFound />,
    },
    {
      path: '/docs-checklist',
      element: <DocsCheckList />,
      errorElement: <PageNotFound />,
    },
    {
      path: '/help-video',
      element: <HelpVideo />,
      errorElement: <PageNotFound />,
    },
    {
      path: '/support',
      element: <Support />,
      errorElement: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;
