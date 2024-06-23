import { useState } from 'react';
import COLORS from '../../../../../Assets/colors';
import ICONS from '../../../../../Assets/icons';
import SVGIcon from '../../../../../Components/SVGIcon';
import AdditionalInfoCard from './AdditionalInfoCard';
import BankDetails from './BankDetails';
import BasicCompanyInfo from './BasicCompanyInfo';
import CertificationSection from './CertificationSection';
import LicenseSection from './LicenseSection';
import TaxInfo from './TaxInfo';

const CompanyInfo = () => {
  const [isNextButton, setIsNextButton] = useState(true);

  return (
    <div className='flex justify-between gap-20'>
      <div className='flex flex-col gap-10 flex-1 max-h-[750px] scrollable-div pb-10'>
        <div className='flex flex-col px-5 gap-3 bg-white py-6 shadow-sm rounded-md w-[100%]'>
          <div className='flex items-center gap-4'>
            <SVGIcon
              Icon={ICONS.INFO_ICON}
              fillColor={COLORS.primary}
              width='20px'
              height='20px'
            />
            <p className='font-medium text-lg'> Instruction</p>
          </div>
          <ul className='w-full space-y-1 text-gray-700 list-disc list-inside'>
            <li>
              Enter Statutory information which includes Company nature,
              constituition and GST registration type.
            </li>
            <li>
              Legal name is auto-populated as per the information on PAN
              databse. it is not editable to vendors.
            </li>
            <li>
              Enter all the mandatory fields before proceeding to enter location
              information.
            </li>
          </ul>
        </div>
        <form className='flex flex-col gap-10'>
          <TaxInfo />
          <BasicCompanyInfo />
          <BankDetails />
          <CertificationSection />
          <LicenseSection />
          <AdditionalInfoCard />

          <div className='flex items-center'>
            <label
              className='relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3'
              htmlFor='remember'
            >
              <input
                type='checkbox'
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-blue-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-700 checked:bg-blue-700 checked:before:bg-blue-700 hover:before:opacity-10"
                id='remember'
              />
              <span className='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-3.5 w-3.5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  stroke='currentColor'
                  stroke-width='1'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </span>
            </label>
            <label
              htmlFor='link-checkbox'
              className='ms-2 text-lg font-normal text-gray-500'
            >
              By submitting the form, the vendor acknowledges that the provided
              information is true and accurate.
            </label>
          </div>
          <button
            onClick={() => {}}
            disabled={!isNextButton}
            type='submit'
            className={`mt-5 ${
              isNextButton
                ? 'text-white bg-blue-700 hover:bg-blue-800'
                : 'text-gray-500 bg-gray-300 hover:bg-gray-500 cursor-not-allowed'
            } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto self-start px-10 py-2.5 text-center`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyInfo;
