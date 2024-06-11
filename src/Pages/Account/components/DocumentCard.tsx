import React from 'react';
import SVGIcon from '../../../Components/SVGIcon';
import ICONS from '../../../Assets/icons';
import COLORS from '../../../Assets/colors';

const DocumentCard = () => {
  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-sm rounded-md'>
      <div className='flex flex-col gap-2'>
        <p className='text-xl font-medium'>Documents</p>
        <div className='flex items-center gap-2'>
          <SVGIcon
            Icon={ICONS.INFO_ICON}
            fillColor={COLORS.primary}
            width='20px'
            height='20px'
          />
          <p className='text-sm'>
            TDS may be deducted at higher rates in case of incorrect or missing
            PAN information as per IT rules.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-10'>
        <div className='flex gap-20 items-center'>
          <p className='font-medium flex-1'>Upload PAN copy</p>
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
        <div className='flex gap-20 items-center'>
          <p className='font-medium flex-1'>
            Upload Dealer authorization certificate
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
        <div className='flex gap-20 items-center'>
          <p className='font-medium flex-1'>Upload TIN certificate</p>
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
        <div className='flex gap-20 items-center'>
          <p className='font-medium flex-1'>
            Upload ISO, RSDO and any additional certificate
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

export default DocumentCard;
