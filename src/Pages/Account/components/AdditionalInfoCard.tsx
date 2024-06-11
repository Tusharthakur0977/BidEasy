import React from 'react';
import { FiDownload } from 'react-icons/fi';
import COLORS from '../../../Assets/colors';

const AdditionalInfoCard = () => {
  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-sm rounded-md'>
      <div className='flex flex-col gap-2'>
        <p className='text-xl font-medium'>Documents</p>
        <div className='flex items-center justify-between'>
          <p className='text-sm'>
            Areas of buisness interest. Select all that apply and wait for the
            HSN/SAC code to appear below
          </p>
          <div className='flex gap-2 items-center'>
            <button className='font-medium text-blue-600'>
              Download Codesheet
            </button>
            <FiDownload color={COLORS.primary} />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='font-bold text-lg'>Selected HSN/SAC Codes</p>
        <p>Selected HSN/SAC Codes</p>

        <div className='relative z-0 w-full group'>
          <input
            type='text'
            name='additional_buisness_area'
            id='additional_buisness_area'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='additional_buisness_area'
            className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Additional Buisness Areas
          </label>
        </div>
      </div>
      <div className='flex items-center'>
        <input
          id='link-checkbox'
          type='checkbox'
          value=''
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2'
        />
        <label
          htmlFor='link-checkbox'
          className='ms-2 text-sm font-medium text-gray-900'
        >
          I confirm that the PAN i entered above should be used for all TDS
          deduction made for our compan payments. .
        </label>
      </div>
    </div>
  );
};

export default AdditionalInfoCard;
