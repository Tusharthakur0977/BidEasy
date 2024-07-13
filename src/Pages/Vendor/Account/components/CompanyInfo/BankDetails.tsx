import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../../redux/store';
import {
  setAccountHolder,
  setAccountNumber,
  setBankBranch,
  setBankName,
  setChequePhoto,
  setIfscCode,
} from '../../../../../redux/VendorSlices/bankInfoSlice';
import {
  getVendorAccountDetails,
  getVendorBasicDetails,
} from '../../../../../redux/VendorSlices/VendorDataSlice';
import { extractPdfFilename } from '../../../../../Utils/Helpers';
import IMAGES from '../../../../../Assets/images';
import { LuDownload } from 'react-icons/lu';

const BankDetails = () => {
  const dispatch = useDispatch();
  const { bankName, accountHolder, accountNumber, ifscCode, bankBranch } =
    useAppSelector((state) => state.bankInfo);

  const vendorBasicDetails = useAppSelector(getVendorBasicDetails);
  const vendorAcocuntDetails = useAppSelector(getVendorAccountDetails);

  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-md'>
      <div className='flex w-full pb-3 justify-between items-center border-b-[1px] border-gray-300'>
        <p className='text-xl font-bold'>Bank Informarion</p>
        {vendorBasicDetails.isDetailsRegistered && (
          <button
            onClick={() => {}}
            type='submit'
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center`}
          >
            Update Bank Details
          </button>
        )}
      </div>
      {vendorBasicDetails.isDetailsRegistered ? (
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Bank Name -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.bankName}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Account Holder Name -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.accountHolder}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Account Number -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.accountNumber}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              IFSC Code -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.ifscCode}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Cheque photo / Bank Authorisation letter -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(vendorAcocuntDetails?.chequePhoto!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() => window.open(vendorAcocuntDetails?.chequePhoto)}
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={bankName}
              onChange={(e) => dispatch(setBankName(e.target.value))}
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
              onChange={(e) => dispatch(setAccountHolder(e.target.value))}
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
              onChange={(e) => dispatch(setAccountNumber(e.target.value))}
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
              onChange={(e) => dispatch(setIfscCode(e.target.value))}
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
              onChange={(e) => dispatch(setBankBranch(e.target.value))}
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
                onChange={(e) => dispatch(setChequePhoto(e.target.files![0]))}
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

export default BankDetails;
