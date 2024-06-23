import { FC } from 'react';
import { useVendor } from '../../../../../Context/VendorContext';

type BusinessInfoProps = {};

const BasicCompanyInfo: FC<BusinessInfoProps> = () => {
  const {
    legalBusinessName,
    setLegalBusinessName,
    companyAddress,
    setCompanyAddress,
    city,
    setCity,
    state,
    setState,
    pinCode,
    setPinCode,
    gstClassification,
    contactPersonName,
    setContactPersonName,
    contactPersonEmail,
    setContactPersonEmail,
    contactPersonNumber,
    setContactPersonNumber,
    accountDeptEmail,
    setAccountDeptEmail,
    salesDeptEmail,
    setSalesDeptEmail,
  } = useVendor();

  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-md'>
      <p className='text-xl font-medium'>Basic Company Information</p>

      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            value={legalBusinessName}
            onChange={(e) => setLegalBusinessName(e.target.value)}
            type='text'
            name='legalBusinessName'
            id='legalBusinessName'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            disabled={gstClassification !== 'not_registered'}
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
            onChange={(e) => setCompanyAddress(e.target.value)}
            type='text'
            name='companyAddress'
            id='companyAddress'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
            disabled={gstClassification !== 'not_registered'}
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
            onChange={(e) => setCity(e.target.value)}
            type='text'
            name='city'
            id='city'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
            disabled={gstClassification !== 'not_registered'}
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
            onChange={(e) => setState(e.target.value)}
            type='text'
            name='state'
            id='state'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
            disabled={gstClassification !== 'not_registered'}
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
            onChange={(e) => setPinCode(e.target.value)}
            type='number'
            name='pinCode'
            id='pinCode'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
            disabled={gstClassification !== 'not_registered'}
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
            onChange={(e) => setContactPersonName(e.target.value)}
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
            onChange={(e) => setContactPersonEmail(e.target.value)}
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
            onChange={(e) => setContactPersonNumber(e.target.value)}
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
            onChange={(e) => setAccountDeptEmail(e.target.value)}
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
            onChange={(e) => setSalesDeptEmail(e.target.value)}
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
    </div>
  );
};

export default BasicCompanyInfo;
