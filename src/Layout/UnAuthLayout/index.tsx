import { Link, Outlet, useLocation } from 'react-router-dom';
import HeadBar from './components/HeadBar';
import IMAGES from '../../Assets/images';

const UnAuthLayout = () => {
  const location = useLocation();

  const signUpRoutes = [
    '/auth/signup',
    '/auth/signup/pan',
    '/auth/signup/setpassword',
  ];

  return (
    <div className='w-screen h-screen flex relative px-16 py-20'>
      <div className='flex flex-[0.7] flex-col justify-between'>
        <HeadBar />
        <div className=' w-full flex flex-1 justify-center items-center'>
          <img
            src={IMAGES.vendorIllustration}
            className='rounded-md h-[70%] w-[70%] object-contain'
            alt=''
          />
        </div>
      </div>
      <div className='flex flex-[0.3] flex-col py-20 justify-between items-center gap-10 shadow-xl rounded-md'>
        <div className='flex items-center justify-center gap-14 w-full'>
          <Link
            to={'/auth/signin'}
            className={`py-2 ${
              location.pathname === '/auth/signin' &&
              'border-b-green-600 border-b-2'
            }`}
          >
            <p
              className={`text-2xl  text-gray-500 ${
                location.pathname === '/auth/signin'
                  ? 'font-bold'
                  : 'font-medium text-gray-400'
              }`}
            >
              Sign IN
            </p>
          </Link>
          <Link
            to={'/auth/signup'}
            className={`py-2 ${
              signUpRoutes.includes(location.pathname) &&
              'border-b-green-600 border-b-2'
            }`}
          >
            <p
              className={`text-2xl   ${
                signUpRoutes.includes(location.pathname)
                  ? 'font-bold'
                  : 'font-medium text-gray-400'
              }`}
            >
              Sign UP
            </p>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default UnAuthLayout;
