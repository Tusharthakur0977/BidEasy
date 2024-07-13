import { LuDownload } from 'react-icons/lu';
import IMAGES from '../../../../../Assets/images';
import { useAppDispatch, useAppSelector } from '../../../../../redux/store';
import {
  setCinNumber,
  setCompanyRegsCertificate,
  setMsmeCertificate,
  setMsmeNumber,
  setMsmeType,
} from '../../../../../redux/VendorSlices/certificatesSlice';
import {
  getVendorAccountDetails,
  getVendorBasicDetails,
} from '../../../../../redux/VendorSlices/VendorDataSlice';
import { MSMETypeData } from '../../../../../seeds/CompanyInfoData';
import { extractPdfFilename } from '../../../../../Utils/Helpers';

const CertificationSection = () => {
  const dispatch = useAppDispatch();

  const { msmeType, msmeNumber, cinNumber } = useAppSelector(
    (state) => state.certificatesInfo
  );

  const vendorBasicDetails = useAppSelector(getVendorBasicDetails);
  const vendorAcocuntDetails = useAppSelector(getVendorAccountDetails);

  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-md'>
      <div className='flex w-full pb-3 justify-between items-center border-b-[1px] border-gray-300'>
        <p className='text-xl font-bold'>Certification</p>
        {vendorBasicDetails.isDetailsRegistered && (
          <button
            onClick={() => {}}
            type='submit'
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center`}
          >
            Update Certification Details
          </button>
        )}
      </div>

      {vendorBasicDetails.isDetailsRegistered ? (
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              MSME Type -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.msmeType}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              MSME Number -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.msmeNumber}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              MSME Certificate -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(vendorAcocuntDetails?.msmeCertificate!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() =>
                  window.open(vendorAcocuntDetails?.msmeCertificate)
                }
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
          {vendorAcocuntDetails?.cinNumber && (
            <div className='flex w-full items-center gap-5'>
              <h1 className='flex-[0.3] text-xl text-black font-semibold'>
                CIN Number -
              </h1>
              <h2 className='text-xl flex-1 text-gray-600 '>
                {vendorAcocuntDetails?.cinNumber}
              </h2>
            </div>
          )}
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Company Registration Certification -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(
                  vendorAcocuntDetails?.companyRegsCertificate!
                )}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() =>
                  window.open(vendorAcocuntDetails?.companyRegsCertificate)
                }
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='grid gap-6 mb-6 md:grid-cols-4'>
          <div className='relative z-0 w-full mb-5 group col-span-2'>
            <label
              htmlFor='msmeType'
              className='block mb-2 font-medium text-gray-900'
            >
              MSME Type*
            </label>
            <select
              required
              value={msmeType}
              onChange={(e) => dispatch(setMsmeType(e.target.value))}
              id='msmeType'
              className='block px-4 py-3 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-auto focus:outline-none focus:ring-0 focus:border-gray-200 peer'
            >
              {MSMETypeData.map((option) => (
                <option
                  key={option.value}
                  className='py-3'
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.title}
                </option>
              ))}
            </select>
          </div>
          <div className='relative z-0 w-full mb-5 group col-span-2 self-end'>
            <input
              value={msmeNumber}
              onChange={(e) => dispatch(setMsmeNumber(e.target.value))}
              type='number'
              name='msmeNumber'
              id='msmeNumber'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              required
            />
            <label
              htmlFor='msmeNumber'
              className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              MSME Number*
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group col-span-3 flex items-center gap-5'>
            <p className='font-medium flex-1'>Attach MSME Certification*</p>
            <div>
              <input
                onChange={(e) =>
                  dispatch(setMsmeCertificate(e.target.files![0]))
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
                required
              />
            </div>
          </div>
          <div className='relative z-0 w-full mb-5 group col-span-2'>
            <input
              value={cinNumber}
              onChange={(e) => dispatch(setCinNumber(e.target.value))}
              type='number'
              name='cinNumber'
              id='cinNumber'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
            />
            <label
              htmlFor='cinNumber'
              className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              CIN Number (if available)
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group col-span-3 flex items-center gap-5'>
            <p className='font-medium flex-1'>
              Attach Company Registration Certificate
            </p>
            <div>
              <input
                onChange={(e) =>
                  dispatch(setCompanyRegsCertificate(e.target.files![0]))
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

export default CertificationSection;
