import React from 'react';

const MSMECard = () => {
  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-sm rounded-md'>
      <div className='flex flex-col gap-2'>
        <p className='text-xl font-medium'>MSME Information</p>
        <p>For Tax Purposes</p>
      </div>

      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div className='relative z-0 w-full mb-5 g  roup'>
          <label
            htmlFor='company_constitution'
            className='block mb-2 font-medium text-gray-900'
          >
            Are you MSME registered?
          </label>
          <select
            id='company_constitution'
            className='block px-4 py-3 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-auto focus:outline-none focus:ring-0 focus:border-gray-200 peer'
          >
            <option selected>Select MSMSE registered Type</option>
            <option
              className='py-3'
              value='micro_enterprise'
            >
              Micro Enterprise
            </option>
            <option
              className='py-3'
              value='CA'
            >
              Canada
            </option>
            <option
              className='py-3'
              value='FR'
            >
              France
            </option>
            <option
              className='py-3'
              value='DE'
            >
              Germany
            </option>
          </select>
        </div>

        <div className='relative z-0 w-full mb-5 group self-end'>
          <input
            type='text'
            name='msme_registered_number'
            id='msme_registered_number'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='msme_registered_number'
            className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            MSME Registration Number
          </label>
        </div>

        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='msme_registered_number'
            id='msme_registered_number'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='msme_registered_number'
            className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            MSME Registration Number
          </label>
        </div>
      </div>
    </div>
  );
};

export default MSMECard;
