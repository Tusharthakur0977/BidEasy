import { useAppDispatch, useAppSelector } from '../../../../../redux/store';
import {
  setAccountDeptEmail,
  setCity,
  setCompanyAddress,
  setContactPersonEmail,
  setContactPersonName,
  setContactPersonNumber,
  setLegalBusinessName,
  setPinCode,
  setSalesDeptEmail,
  setState,
} from '../../../../../redux/VendorSlices/basicCompanyinfoSlice';
import {
  getVendorAccountDetails,
  getVendorBasicDetails,
} from '../../../../../redux/VendorSlices/VendorDataSlice';

const BasicCompanyInfo = () => {
  const dispatch = useAppDispatch();
  const {
    legalBusinessName,
    companyAddress,
    city,
    state,
    pinCode,
    contactPersonName,
    contactPersonEmail,
    contactPersonNumber,
    accountDeptEmail,
    salesDeptEmail,
  } = useAppSelector((state) => state.basicCompanyInfo);

  const vendorBasicDetails = useAppSelector(getVendorBasicDetails);
  const vendorAcocuntDetails = useAppSelector(getVendorAccountDetails);

  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-md'>
      <div className='flex w-full pb-3 justify-between items-center border-b-[1px] border-gray-300'>
        <p className='text-xl font-bold'>Basic Company Information</p>
        {vendorBasicDetails.isDetailsRegistered && (
          <button
            onClick={() => {}}
            type='submit'
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center`}
          >
            Update Company Details
          </button>
        )}
      </div>
      {vendorBasicDetails.isDetailsRegistered ? (
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Legal Business Name -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.legalBusinessName}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Company Address -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.companyAddress}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              City -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.city}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              State -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.state}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Pin Code -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.pinCode}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Contact Person Name -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.contactPersonName}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Contact Person Email -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.contactPersonEmail}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Contact Person Number -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.contactPersonNumber}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Account Dept. Email ID -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.accountDeptEmail}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Sales Dept. Email ID -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorAcocuntDetails?.salesDeptEmail}
            </h2>
          </div>
        </div>
      ) : (
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={legalBusinessName}
              onChange={(e) => dispatch(setLegalBusinessName(e.target.value))}
              type='text'
              name='legalBusinessName'
              id='legalBusinessName'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              // disabled={gstClassification !== 'not_registered'}
              placeholder=''
            />
            <label
              htmlFor='legalBusinessName'
              className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Legal Business Name
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={companyAddress}
              onChange={(e) => dispatch(setCompanyAddress(e.target.value))}
              type='text'
              name='companyAddress'
              id='companyAddress'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              // disabled={gstClassification !== 'not_registered'}
            />
            <label
              htmlFor='companyAddress'
              className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Company Address
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={city}
              onChange={(e) => dispatch(setCity(e.target.value))}
              type='text'
              name='city'
              id='city'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              // disabled={gstClassification !== 'not_registered'}
            />
            <label
              htmlFor='city'
              className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              City
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={state}
              onChange={(e) => dispatch(setState(e.target.value))}
              type='text'
              name='state'
              id='state'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              // disabled={gstClassification !== 'not_registered'}
            />
            <label
              htmlFor='state'
              className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              State
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={pinCode}
              onChange={(e) => dispatch(setPinCode(e.target.value))}
              type='number'
              name='pinCode'
              id='pinCode'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              // disabled={gstClassification !== 'not_registered'}
            />
            <label
              htmlFor='pinCode'
              className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Pin Code
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={contactPersonName}
              onChange={(e) => dispatch(setContactPersonName(e.target.value))}
              type='text'
              name='contactPersonName'
              id='contactPersonName'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
            />
            <label
              htmlFor='contactPersonName'
              className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Contact Person Name
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={contactPersonEmail}
              onChange={(e) => dispatch(setContactPersonEmail(e.target.value))}
              type='text'
              name='contactPersonEmail'
              id='contactPersonEmail'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
            />
            <label
              htmlFor='contactPersonEmail'
              className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Contact Person Email
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={contactPersonNumber}
              onChange={(e) => dispatch(setContactPersonNumber(e.target.value))}
              type='number'
              name='contactPersonNumber'
              id='contactPersonNumber'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
            />
            <label
              htmlFor='contactPersonNumber'
              className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Contact Person Number
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={accountDeptEmail}
              onChange={(e) => dispatch(setAccountDeptEmail(e.target.value))}
              type='text'
              name='accountDeptEmail'
              id='accountDeptEmail'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
            />
            <label
              htmlFor='accountDeptEmail'
              className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Account Dept. Email ID
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={salesDeptEmail}
              onChange={(e) => dispatch(setSalesDeptEmail(e.target.value))}
              type='text'
              name='salesDeptEmail'
              id='salesDeptEmail'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
            />
            <label
              htmlFor='salesDeptEmail'
              className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Sales Dept. Email ID
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicCompanyInfo;
