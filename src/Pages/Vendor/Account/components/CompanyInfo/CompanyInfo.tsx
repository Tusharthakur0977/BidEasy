import { Dispatch, FC, SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';
import COLORS from '../../../../../Assets/colors';
import ICONS from '../../../../../Assets/icons';
import Spinnner from '../../../../../Components/Spinnner';
import SVGIcon from '../../../../../Components/SVGIcon';
import { useAddVendorDetailsApi } from '../../../../../Hooks/API/useVendorApis';
import { useAppSelector } from '../../../../../redux/store';
import { getAdditionalInfo } from '../../../../../redux/VendorSlices/additionalInfoSlice';
import { getBankInfo } from '../../../../../redux/VendorSlices/bankInfoSlice';
import { getBasicCompanyInfo } from '../../../../../redux/VendorSlices/basicCompanyinfoSlice';
import { getCertificationsInfo } from '../../../../../redux/VendorSlices/certificatesSlice';
import { getLicenseInfo } from '../../../../../redux/VendorSlices/LicensesInfoSlice';
import { getTaxInfoDetails } from '../../../../../redux/VendorSlices/taxSlice';
import { getVendorBasicDetails } from '../../../../../redux/VendorSlices/VendorDataSlice';
import AdditionalInfoCard from './AdditionalInfoCard';
import BankDetails from './BankDetails';
import BasicCompanyInfo from './BasicCompanyInfo';
import CertificationSection from './CertificationSection';
import LicenseSection from './LicenseSection';
import TaxInfo from './TaxInfo';

type CompanyInfoProps = {
  setRefreshDetails: Dispatch<SetStateAction<number>>;
};

const CompanyInfo: FC<CompanyInfoProps> = ({ setRefreshDetails }) => {
  const addVendorsDetailApi = useAddVendorDetailsApi();

  const [isAcknowledged, setIsAcknowledged] = useState(false);

  const vendorBasicDetails = useAppSelector(getVendorBasicDetails);

  const taxInfo = useAppSelector(getTaxInfoDetails);
  const basicCompanyInfo = useAppSelector(getBasicCompanyInfo);
  const bankInfo = useAppSelector(getBankInfo);
  const certificationInfo = useAppSelector(getCertificationsInfo);
  const licenseInfo = useAppSelector(getLicenseInfo);
  const additionalInfo = useAppSelector(getAdditionalInfo);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('gstClassification', taxInfo.gstClassification);
    formdata.append('gstNumber', taxInfo.gstNumber);
    formdata.append('typesOfSupply', taxInfo.typesOfSupply);
    formdata.append('buisnessAddress', taxInfo.buisnessAddress);
    formdata.append('legalBusinessName', basicCompanyInfo.legalBusinessName);
    formdata.append('companyAddress', basicCompanyInfo.companyAddress);
    formdata.append('city', basicCompanyInfo.city);
    formdata.append('state', basicCompanyInfo.state);
    formdata.append('pinCode', basicCompanyInfo.pinCode);
    formdata.append('contactPersonName', basicCompanyInfo.contactPersonName);
    formdata.append('contactPersonEmail', basicCompanyInfo.contactPersonEmail);
    formdata.append(
      'contactPersonNumber',
      basicCompanyInfo.contactPersonNumber
    );
    formdata.append('accountDeptEmail', basicCompanyInfo.accountDeptEmail);
    formdata.append('salesDeptEmail', basicCompanyInfo.salesDeptEmail);
    formdata.append('bankName', bankInfo.bankName);
    formdata.append('accountHolder', bankInfo.accountHolder);
    formdata.append('accountNumber', bankInfo.accountNumber);
    formdata.append('ifscCode', bankInfo.ifscCode);
    formdata.append('bankBranch', bankInfo.bankBranch);
    formdata.append('panDocument', taxInfo.panDocument!);
    formdata.append('gstCertificate', taxInfo.gstCertificate!);
    formdata.append('chequePhoto', bankInfo.chequePhoto);
    formdata.append('msmeNumber', certificationInfo.msmeNumber);
    formdata.append('msmeType', certificationInfo.msmeType);
    formdata.append('cinNumber', certificationInfo.cinNumber);
    formdata.append('msmeCertificate', certificationInfo.msmeCertificate);
    formdata.append(
      'companyRegsCertificate',
      certificationInfo.companyRegsCertificate
    );
    formdata.append('authorisedDist', licenseInfo.authorisedDist);
    formdata.append('drugLicense', licenseInfo.drugLicense);
    formdata.append('additionalLicenses', licenseInfo.additionalLicenses);
    formdata.append(
      'additionalAttachement',
      additionalInfo.additionalAttachment
    );
    formdata.append('additionalNotes', additionalInfo.additionalNotes);

    addVendorsDetailApi
      .mutateAsync(formdata)
      .then((res) => {
        if (res.status === 200) {
          setRefreshDetails(Math.floor(Math.random() * 1000) + 1);
          toast.success(
            'Your Details has been submitted sccessfully. Please wait for the details to be verified.'
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='flex justify-between gap-20'>
      <div className='flex flex-col gap-10 flex-1 max-h-[750px] scrollable-div pb-10'>
        {!vendorBasicDetails.isDetailsRegistered && (
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
        )}
        {vendorBasicDetails.isDetailsRegistered ? (
          <div className='flex flex-col gap-10'>
            <TaxInfo />
            <BasicCompanyInfo />
            <BankDetails />
            <CertificationSection />
            <LicenseSection />
            <AdditionalInfoCard />
          </div>
        ) : (
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
                  checked={isAcknowledged}
                  onChange={(e) => setIsAcknowledged(e.target.checked)}
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
                    strokeWidth='1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                htmlFor='link-checkbox'
                className='ms-2 text-lg font-normal text-gray-500'
              >
                By submitting the form, the vendor acknowledges that the
                provided information is true and accurate.
              </label>
            </div>
            <button
              onClick={onSubmit}
              disabled={!isAcknowledged}
              type='submit'
              className={`mt-5 ${
                isAcknowledged
                  ? 'text-white bg-blue-700 hover:bg-blue-800'
                  : 'text-gray-500 bg-gray-300 hover:bg-gray-500 cursor-not-allowed'
              } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto self-start px-10 py-2.5 text-center`}
            >
              {addVendorsDetailApi.isLoading ? <Spinnner /> : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CompanyInfo;
