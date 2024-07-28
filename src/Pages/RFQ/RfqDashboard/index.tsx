import { Link, Outlet, useLocation } from 'react-router-dom';

const ROUTES = [
  { title: "RFQ's", route: 'rfqList' },
  { title: "PR's", route: 'prList' },
  { title: 'Suppliers', route: 'suppliers' },
  { title: "PO's", route: 'poList' },
  { title: 'Invoice', route: 'invoice' },
];

const RfqDashboard = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col pr-10 py-10 gap-16 bg-[#F5F7F9] min-h-full'>
      <ul className='flex flex-wrap w-full justify-center font-medium text-center text-gray-500 dark:text-gray-400'>
        {ROUTES.map((route, index) => {
          const activeClassName = location.pathname.includes(
            `/rfq/dashboard/${route.route}`
          )
            ? 'text-white bg-blue-600'
            : 'text-black bg-white';
          return (
            <li
              key={route.title + index.toString()}
              className='me-2 flex-[0.15]'
            >
              <Link
                to={route.route}
                className={`inline-block w-full px-4 py-3 text-lg rounded-lg ${activeClassName}`}
                aria-current='page'
              >
                {route.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default RfqDashboard;
