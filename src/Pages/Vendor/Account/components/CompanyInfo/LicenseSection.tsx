import { LuDownload } from 'react-icons/lu';
import IMAGES from '../../../../../Assets/images';
import { useAppDispatch, useAppSelector } from '../../../../../redux/store';
import {
  setAdditionalLicenses,
  setAuthorisedDist,
  setDrugLicense,
} from '../../../../../redux/VendorSlices/LicensesInfoSlice';
import {
  getVendorAccountDetails,
  getVendorBasicDetails,
} from '../../../../../redux/VendorSlices/VendorDataSlice';
import { extractPdfFilename } from '../../../../../Utils/Helpers';

const LicenseSection = () => {
  const dispatch = useAppDispatch();

  const vendorBasicDetails = useAppSelector(getVendorBasicDetails);
  const vendorAcocuntDetails = useAppSelector(getVendorAccountDetails);

  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-md'>
      <div className='flex w-full pb-3 justify-between items-center border-b-[1px] border-gray-300'>
        <p className='text-xl font-bold'>License Upload Section</p>
        {vendorBasicDetails.isDetailsRegistered && (
          <button
            onClick={() => {}}
            type='submit'
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center`}
          >
            Update Licenses
          </button>
        )}
      </div>
      {vendorBasicDetails.isDetailsRegistered ? (
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Authorised Distributor Letter -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(vendorAcocuntDetails?.authorisedDist!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() =>
                  window.open(vendorAcocuntDetails?.authorisedDist)
                }
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Drug License -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(vendorAcocuntDetails?.drugLicense!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() => window.open(vendorAcocuntDetails?.drugLicense)}
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Other Licenses -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(vendorAcocuntDetails?.additionalLicenses!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() =>
                  window.open(vendorAcocuntDetails?.additionalLicenses)
                }
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='grid gap-6 mb-6 md:grid-cols-4'>
          <div className='relative z-0 w-full mb-5 group col-span-3 flex items-center gap-5'>
            <p className='font-medium flex-1'>Authorised Distributor Letter</p>
            <div>
              <input
                onChange={(e) =>
                  dispatch(setAuthorisedDist(e.target.files![0]))
                }
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
          <div className='relative z-0 w-full mb-5 group col-span-3 flex items-center gap-5'>
            <p className='font-medium flex-1'>Drug License</p>
            <div>
              <input
                onChange={(e) => dispatch(setDrugLicense(e.target.files![0]))}
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

          <div className='relative z-0 w-full mb-5 group col-span-3 flex items-center gap-5'>
            <p className='font-medium flex-1'>Other Licenses</p>
            <div>
              <input
                onChange={(e) =>
                  dispatch(setAdditionalLicenses(e.target.files![0]))
                }
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
      )}
    </div>
  );
};

export default LicenseSection;
