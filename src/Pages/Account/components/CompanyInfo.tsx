import React, { useState } from 'react';
import SVGIcon from '../../../Components/SVGIcon';
import ICONS from '../../../Assets/icons';
import COLORS from '../../../Assets/colors';
import StatutoryCard from './StatutoryCard';
import MSMECard from './MSMECard';
import DocumentCard from './DocumentCard';
import AdditionalInfoCard from './AdditionalInfoCard';
import BusinessForm from './BusinessForm';

const CompanyInfo = () => {
  const [isNextButton, setIsNextButton] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const [businessForms, setBusinessForms] = useState<{ id: number }[]>([]);

  const addForm = () => {
    const newFormId = businessForms.length + 1;
    setBusinessForms((businessForms) => [...businessForms, { id: newFormId }]);
  };

  const removeForm = (id: number) => {
    setBusinessForms((businessForms) =>
      businessForms.filter((form) => form.id !== id)
    );
  };
  return (
    <div className='flex justify-between gap-10'>
      {currentStep === 0 ? (
        <div className='flex flex-col gap-10 flex-[0.8] max-h-[750px] scrollable-div pb-10'>
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
                Enter all the mandatory fields before proceeding to enter
                location information.
              </li>
            </ul>
          </div>
          <StatutoryCard />
          <MSMECard />
          <DocumentCard />
          <AdditionalInfoCard />
          <button
            onClick={() => setCurrentStep(1)}
            disabled={!isNextButton}
            type='submit'
            className={`${
              isNextButton
                ? 'text-white bg-blue-700 hover:bg-blue-800'
                : 'text-gray-500 bg-gray-300 hover:bg-gray-500 cursor-not-allowed'
            } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto self-start px-10 py-2.5 text-center`}
          >
            Save and Next
          </button>
        </div>
      ) : (
        <div className='flex flex-col gap-10 flex-[0.8] max-h-[750px] scrollable-div pb-10'>
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
                This is a API enabled for. Email and GSTIN data will need to be
                validated automatically before you can submit it.
              </li>
              <li>
                Click on Validate below the GSTIN field and select the location
                from the drop down list in the location field.
              </li>
              <li>
                Address details will be auto-populated and are not be editable.
              </li>
            </ul>
          </div>

          {businessForms.map((form) => (
            <BusinessForm
              id={form.id}
              removeForm={removeForm}
            />
          ))}

          <button
            onClick={addForm}
            className='flex flex-col px-5 gap-3 bg-white py-10 shadow-sm rounded-md w-[100%] text-blue-500 font-bold text-xl justify-center items-center'
          >
            + Add Business Location
          </button>

          <div className='flex justify-between items-center'>
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              type='submit'
              className={`${
                isNextButton
                  ? 'text-white bg-blue-700 hover:bg-blue-800'
                  : 'text-gray-500 bg-gray-300 hover:bg-gray-500 cursor-not-allowed'
              } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto self-start px-10 py-2.5 text-center`}
            >
              Back
            </button>
            <button
              disabled={!isNextButton}
              type='submit'
              className={`${
                isNextButton
                  ? 'text-white bg-blue-700 hover:bg-blue-800'
                  : 'text-gray-500 bg-gray-300 hover:bg-gray-500 cursor-not-allowed'
              } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto self-start px-10 py-2.5 text-center`}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <ol className='flex-[0.2] relative text-gray-500 border-s border-gray-200'>
        <li
          className={`mb-10 ms-6 ${
            currentStep === 0 ? 'bg-green-200' : 'bg-gray-100'
          }`}
        >
          <span
            className={`absolute flex items-center justify-center w-8 h-8 ${
              currentStep === 0
                ? 'bg-green-200 text-green-500'
                : 'bg-gray-100 text-gray-500'
            } rounded-full -start-4 ring-4 ring-white`}
          >
            <svg
              className='w-3.5 h-3.5 text-green-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 16 12'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 5.917 5.724 10.5 15 1.5'
              />
            </svg>
          </span>
          <h3 className='font-medium leading-tight'>Vendor Details</h3>
        </li>
        <li
          className={`mb-10 ms-6 ${
            currentStep === 1 ? 'bg-green-200' : 'bg-gray-100'
          }`}
        >
          <span
            className={`absolute flex items-center justify-center w-8 h-8 ${
              currentStep === 1
                ? 'bg-green-200 text-green-500'
                : 'bg-gray-100 text-gray-500'
            } rounded-full -start-4 ring-4 ring-white`}
          >
            <svg
              className='w-3.5 h-3.5 text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 16'
            >
              <path d='M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z' />
            </svg>
          </span>
          <h3 className='font-medium leading-tight px-3 py-2'>
            Business Details
          </h3>
        </li>
      </ol>
    </div>
  );
};

export default CompanyInfo;
