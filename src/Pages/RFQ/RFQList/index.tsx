import { Link, Outlet, useLocation } from 'react-router-dom';

const RFQList = () => {
  const location = useLocation();

  return (
    <div className='flex flex-wrap w-full flex-1 items-start overflow-y-auto'>
      {location.pathname === '/rfq/dashboard/rfqList' ? (
        <div className='w-full flex justify-between items-center mx-10'>
          <p className='font-bold text-3xl'>RFQ Event List</p>
          <Link
            to={'createRfq'}
            className='px-10 py-2 rounded-lg text-lg font-bold bg-cyan-300'
          >
            Create new RFQ Event
          </Link>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default RFQList;
