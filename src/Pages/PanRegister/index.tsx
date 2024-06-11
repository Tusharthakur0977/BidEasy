import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PanRegister = () => {
  const navigate = useNavigate();

  const [pan, setPan] = useState('');
  const [reEnterPan, setReEnterPan] = useState('');

  const onSubmit = () => {
    navigate('/auth/signup/setpassword');
  };

  return (
    <div className='p-16 flex flex-col flex-1 w-full gap-10'>
      <p className='text-2xl font-medium'>PAN Information</p>
      <form className='mx-auto w-full'>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            type='text'
            name='enter_pan'
            id='enter_pan'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
            required
          />
          <label
            htmlFor='enter_pan'
            className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Enter PAN
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            value={reEnterPan}
            onChange={(e) => setReEnterPan(e.target.value)}
            type='text'
            name='re-enter_pan'
            id='re-enter_pan'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
            required
          />
          <label
            htmlFor='re-enter_pan'
            className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Re-enter PAN
          </label>
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

export default PanRegister;
