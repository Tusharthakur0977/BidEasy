import React from 'react';
import { useVendor } from '../../../../../Context/VendorContext';

const BankDetails = () => {
  const {
    bankName,
    setBankName,
    accountHolder,
    setAccountHolder,
    accountNumber,
    setAccountNumber,
    ifscCode,
    setIfscCode,
    bankBranch,
    setBankBranch,
    chequePhoto,
    setChequePhoto,
  } = useVendor();
  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-md'>
      <p className='text-xl font-medium'>Bank Informarion</p>

      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            type='text'
            name='bankName'
            id='bankName'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='bankName'
            className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Bank Name
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
            type='text'
            name='accountHolder'
            id='accountHolder'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='accountHolder'
            className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Account Holder Name
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            type='number'
            name='accountNumber'
            id='accountNumber'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='accountNumber'
            className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Account Number
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            type='number'
            name='ifscCode'
            id='ifscCode'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='ifscCode'
            className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            IFSC Code
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            value={bankBranch}
            onChange={(e) => setBankBranch(e.target.value)}
            type='text'
            name='bankBranch'
            id='bankBranch'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='bankBranch'
            className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Bank Branch
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group flex items-center gap-5'>
          <p className='font-medium flex-1'>
            Attach Cheque photo or Bank Authorisation letter
          </p>
          <div>
            <input
              type='file'
              className='block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
