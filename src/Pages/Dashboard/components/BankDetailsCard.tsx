import React from 'react';
import { Link } from 'react-router-dom';

const BankDetailsCard = () => {
  return (
    <div className='flex rounded-md border-l-8 bg-white border-[#F29527] px-5 py-8'>
      <div className='flex flex-1 md:flex-[0.8] md:flex-col  gap-10 justify-between'>
        <p className='text-2xl font-medium'>Bank Details</p>
        <div className='flex gap-32 items-center px-2'>
          <div className='flex flex-col gap-1'>
            <p>Bank</p>
            <p className='font-medium'>Not Applicable</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p>Account Name</p>
            <p className='font-medium'>Not Applicable</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p>Branch</p>
            <p className='font-medium'>Not Applicable</p>
          </div>
        </div>
      </div>
      <Link
        to={'/bank_details'}
        className='flex-[0.2] self-start text-white bg-blue-700 font-medium focus:ring-4 focus:outline-none focus:ring-white rounded-lg text-md w-full px-5 py-3 text-center'
      >
        Manage
      </Link>
    </div>
  );
};

export default BankDetailsCard;
