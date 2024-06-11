import { CgCircleci } from 'react-icons/cg';
import { CiBank, CiSettings } from 'react-icons/ci';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { TbFileInvoice } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { LuLogOut } from 'react-icons/lu';
import { useAuth } from '../../../Context/AuthContext';
import IMAGES from '../../../Assets/images';

const sideRoutes = [
  {
    title: 'My Dashboard',
    icon: <MdOutlineSpaceDashboard size={24} />,
    path: '/',
  },
  {
    title: 'Bank Details',
    icon: <CiBank size={24} />,
    path: '/bank_details',
  },
  {
    title: 'Order',
    icon: <CgCircleci size={24} />,
    path: '/order',
  },
  { title: 'Invoices', icon: <TbFileInvoice size={24} />, path: '/invoice' },
];

const Sidebar = () => {
  const location = useLocation();
  const { setIsAuthenticated } = useAuth();

  return (
    <aside className='w-full h-screen transition-transform -translate-x-full md:translate-x-0'>
      <div className='h-full flex flex-col overflow-y-auto items-center bg-blue-700'>
        <div className='py-5 w-[80%]'>
          <p className='text-3xl font-bold text-white'>BIDEASY</p>
        </div>

        <div className='w-[85%] flex justify-center flex-col my-4 gap-3'>
          <div className='flex items-center gap-3 py-4 w-full'>
            <img
              src={IMAGES.menAvatar}
              height={50}
              width={50}
              alt=''
            />
            <p className='font-medium text-lg text-white'>Abhinav</p>
          </div>
          <Link
            to={'/account'}
            className={`flex items-center ${
              location.pathname === '/account'
                ? 'bg-white text-black font-bold'
                : 'font-medium text-white'
            }  px-2 py-3 gap-3 w-full rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out`}
          >
            <CiSettings size={24} />
            <p className='font-medium text-lg'>Account Settings</p>
          </Link>
        </div>
        <ul className='space-y-5 w-[85%] my-4 flex-1'>
          {sideRoutes.map((item, index) => (
            <Link
              to={item.path}
              className={`flex items-center px-2 py-3 gap-3 ${
                location.pathname === item.path
                  ? 'bg-white font-bold text-gray-900'
                  : 'font-medium text-white'
              }  rounded-lg hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out`}
            >
              {item.icon}
              <p className=''>{item.title}</p>
            </Link>
          ))}
        </ul>

        <div
          onClick={() => setIsAuthenticated(false)}
          className={`flex items-center px-2 py-3 gap-3 w-[85%] my-5 font-medium rounded-lg hover:bg-white hover:text-black text-white transition duration-300 ease-in-out`}
        >
          <LuLogOut size={24} />
          <p>Log out</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
