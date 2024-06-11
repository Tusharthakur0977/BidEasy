import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import UnProtectedRoute from './UnProtectedRoute';
import PageNotFound from '../Pages/PageNotFound';
import MainLayout from '../Layout/MainLayout';
import UnAuthLayout from '../Layout/UnAuthLayout';
import Dashboard from '../Pages/Dashboard';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import DocsCheckList from '../Pages/DocsCheckList';
import { HelpVideo } from '../Pages/HelpVideo/HelpVideo';
import UserManual from '../Pages/UserManual';
import Support from '../Pages/Support';
import PanRegister from '../Pages/PanRegister';
import SetPassword from '../Pages/SetPassword';
import BankDetails from '../Pages/BankDetails';
import Account from '../Pages/Account';

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: '/bank_details',
          element: (
            <ProtectedRoute>
              <BankDetails />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: '/account',
          element: (
            <ProtectedRoute>
              <Account />
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
