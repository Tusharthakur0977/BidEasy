import React from 'react';

const StatutoryCard = () => {
  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-sm rounded-md'>
      <p className='text-xl font-medium'>Statutory Information</p>

      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='company_name'
            id='company_name'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            disabled
            placeholder=''
          />
          <label
            htmlFor='company_name'
            className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Company Name
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='company_email'
            id='company_email'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            disabled
            placeholder=''
          />
          <label
            htmlFor='company_email'
            className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Company Email
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='company_email'
            id='company_email'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='company_email'
            className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Permanent Account Number (PAN)
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='legal_name'
            id='legal_name'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='legal_name'
            className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Legal Name
          </label>
        </div>

        <div className='relative z-0 w-full mb-5 group'>
          <label
            htmlFor='company_constitution'
            className='block mb-2 font-medium text-gray-900'
          >
            Company Constitution
          </label>
          <select
            id='company_constitution'
            className='block px-4 py-3 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-auto focus:outline-none focus:ring-0 focus:border-gray-200 peer'
          >
            <option selected>Select Constitution</option>
            <option
              className='py-3'
              value='US'
            >
              United States
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
        <div className='relative z-0 w-full mb-5 group'>
          <label
            htmlFor='company_nature'
            className='block mb-2 font-medium text-gray-900'
          >
            Company Nature
          </label>
          <select
            id='company_nature'
            className='block px-4 py-3 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-auto focus:outline-none focus:ring-0 focus:border-gray-200 peer'
          >
            <option selected>Select Company Nature</option>
            <option
              className='py-3'
              value='US'
            >
              United States
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
        <div className='relative z-0 w-full mb-5 group'>
          <label
            htmlFor='affirmative_action_category'
            className='block mb-2 font-medium text-gray-900'
          >
            Affirmative action category
          </label>
          <select
            id='affirmative_action_category'
            className='block px-4 py-3 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-auto focus:outline-none focus:ring-0 focus:border-gray-200 peer'
          >
            <option selected>Select Category</option>
            <option
              className='py-3'
              value='US'
            >
              United States
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
        <div className='relative z-0 w-full mb-5 group'>
          <label
            htmlFor='registration_type'
            className='block mb-2 font-medium text-gray-900'
          >
            Registration Type (GST)
          </label>
          <select
            id='registration_type'
            className='block px-4 py-3 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-auto focus:outline-none focus:ring-0 focus:border-gray-200 peer'
          >
            <option selected>Select Registration Type</option>
            <option
              className='py-3'
              value='US'
            >
              United States
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

        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='tax_identification_number'
            id='tax_identification_number'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='tax_identification_number'
            className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Tax Identification Number (TIN)
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='annual_turnover'
            id='annual_turnover'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='annual_turnover'
            className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Annual Turnover (In Crores)
          </label>
        </div>
      </div>
    </div>
  );
};

export default StatutoryCard;
