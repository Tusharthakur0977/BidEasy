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
import Invoice from '../Pages/RFQ/Invoice';
import POList from '../Pages/RFQ/POList';
import PRList from '../Pages/RFQ/PRList';
import RfqDashboard from '../Pages/RFQ/RfqDashboard';
import RFQList from '../Pages/RFQ/RFQList';
import Suppliers from '../Pages/RFQ/Suppliers';
import VendorApprovals from '../Pages/RFQ/VendorApprovals';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Support from '../Pages/Support';
import UnAuthorized from '../Pages/UnAuthorized';
import UserManual from '../Pages/UserManual';
import Account from '../Pages/Vendor/Account';
import BankDetails from '../Pages/Vendor/BankDetails';
import VendorDashboard from '../Pages/Vendor/Dashboard';
import Invoices from '../Pages/Vendor/Invoices';
import Orders from '../Pages/Vendor/Orders';
import { useAppSelector } from '../redux/store';
import ProtectedRoute from './ProtectedRoute';
import UnProtectedRoute from './UnProtectedRoute';
import VendorDetails from '../Pages/RFQ/VendorDetails';
import CreateRFQ from '../Pages/RFQ/CreateRFQ';

const Routing = () => {
  const user = useAppSelector((state) => state.user);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Navigate
          to={
            user.isAuthenticated
              ? user.userType === 'VENDOR'
                ? '/vendor/dashboard'
                : '/rfq/dashboard/rfqList'
              : '/auth/signin'
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
          action: true,
          children: [
            {
              path: 'rfqList',
              element: (
                <ProtectedRoute>
                  <RFQList />
                </ProtectedRoute>
              ),
              errorElement: <PageNotFound />,
              children: [
                {
                  path: 'createRfq',
                  element: (
                    <ProtectedRoute>
                      <CreateRFQ />
                    </ProtectedRoute>
                  ),
                  errorElement: <PageNotFound />,
                },
                {
                  path: 'createRfq/vendor_details',
                  element: (
                    <ProtectedRoute>
                      <VendorDetails />
                    </ProtectedRoute>
                  ),
                  errorElement:<PageNotFound/>
                },
              ],
            },
            {
              path: 'prList',
              element: (
                <ProtectedRoute>
                  <PRList />
                </ProtectedRoute>
              ),
              errorElement: <PageNotFound />,
            },
            {
              path: 'suppliers',
              element: (
                <ProtectedRoute>
                  <Suppliers />
                </ProtectedRoute>
              ),
              errorElement: <PageNotFound />,
            },
            {
              path: 'poList',
              element: (
                <ProtectedRoute>
                  <POList />
                </ProtectedRoute>
              ),
              errorElement: <PageNotFound />,
            },
            {
              path: 'invoice',
              element: (
                <ProtectedRoute>
                  <Invoice />
                </ProtectedRoute>
              ),
              errorElement: <PageNotFound />,
            },
          ],
        },
        {
          path: 'vendors_approvals',
          element: (
            <ProtectedRoute>
              <VendorApprovals />
            </ProtectedRoute>
          ),
          errorElement: <PageNotFound />,
        },
        {
          path: 'vendors_approvals/vendor_details',
          element: (
            <ProtectedRoute>
              <VendorDetails />
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
    {
      path: '/invalid_link',
      element: <UnAuthorized />,
      errorElement: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;
