import { useState } from 'react';
import SVGIcon from '../../Components/SVGIcon';
import ICONS from '../../Assets/icons';
import COLORS from '../../Assets/colors';
import { useAuth } from '../../Context/AuthContext';

const SignIn = () => {
  const { setIsAuthenticated } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className='p-16 flex flex-col flex-1 w-full gap-10'>
      <p className='text-2xl font-medium'>Enter Your Details</p>
      <form className='mx-auto w-full'>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            name='email'
            id='email'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
            required
          />
          <label
            htmlFor='email'
            className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Enter Email Address
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            name='password'
            id='password'
            className='block py-2.5 px-0 pr-10 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            required
          />
          <label
            htmlFor='password'
            className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Enter Password
          </label>
          <div
            className='absolute top-3 right-3'
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <SVGIcon
                Icon={ICONS.OPEN_EYE}
                fillColor={COLORS.primary}
                width='18px'
                height='18px'
              />
            ) : (
              <SVGIcon
                Icon={ICONS.CLOSE_EYE}
                fillColor={COLORS.primary}
                width='18px'
                height='18px'
              />
            )}
          </div>
        </div>
        <button
          onClick={onSubmit}
          type='submit'
          className='my-8 text-white bg-blue-700 font-medium focus:ring-4 focus:outline-none focus:ring-white rounded-lg text-md w-full px-5 py-3 text-center'
        >
          NEXT
        </button>
      </form>
    </div>
  );
};

export default SignIn;
