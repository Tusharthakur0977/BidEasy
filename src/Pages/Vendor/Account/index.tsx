/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Spinnner from '../../../Components/Spinnner';
import { useGetVendorBasicDetailsApi } from '../../../Hooks/API/useVendorApis';
import { useAppDispatch } from '../../../redux/store';
import { setAllAdditionalInfo } from '../../../redux/VendorSlices/additionalInfoSlice';
import { setAllBankInfo } from '../../../redux/VendorSlices/bankInfoSlice';
import { setAllBasicInfo } from '../../../redux/VendorSlices/basicCompanyinfoSlice';
import { setAllCertificationInfo } from '../../../redux/VendorSlices/certificatesSlice';
import { setAllLicenseInfo } from '../../../redux/VendorSlices/LicensesInfoSlice';
import { setAllProfile } from '../../../redux/VendorSlices/profileSLice';
import {
  setAllTaxInfo,
  setPanNumber,
} from '../../../redux/VendorSlices/taxSlice';
import {
  setVendorAccountDetails,
  setVendorApprovalDetails,
  setVendorBasicDetails,
} from '../../../redux/VendorSlices/VendorDataSlice';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import TopTabs from './components/TopTabs';

const Account = () => {
  const dispatch = useAppDispatch();
  const [queryParams] = useSearchParams();
  const tab = queryParams.get('tab');
  const selectedTab = tab === 'companyInfo' ? 1 : 0;
  const [currentStep, setCurrentStep] = useState(selectedTab);
  const [refreshDetails, setRefreshDetails] = useState(0);

  const {
    data: basicData,
    isLoading: isBasicDataLoading,
    refetch,
  } = useGetVendorBasicDetailsApi();

  const renderSelectedTabSection = useMemo(() => {
    switch (currentStep) {
      case 0:
        return <ProfileInfo />;
      case 1:
        return <CompanyInfo setRefreshDetails={setRefreshDetails} />;
    }
  }, [currentStep]);

  useEffect(() => {
    if (basicData?.data) {
      dispatch(setVendorBasicDetails(basicData.data));
      dispatch(
        setAllProfile({
          email: basicData.data.email,
          firstName: basicData.data.firstName,
          lastName: basicData.data.lastName,
          companyName: basicData.data.companyName,
          panNumber: basicData.data.PAN,
        })
      );
      if (basicData.data.details) {
        dispatch(setVendorAccountDetails(basicData.data.details));
        dispatch(
          setAllTaxInfo({
            panDocument: basicData.data.details.panDocument,
            panNumber: basicData.data.details.panNumber,
            gstClassification: basicData.data.details.gstClassification,
            buisnessAddress: basicData.data.details.buisnessAddress,
            gstCertificate: basicData.data.details.gstCertificate,
            gstNumber: basicData.data.details.gstNumber,
            typesOfSupply: basicData.data.details.typesOfSupply,
          })
        );
        dispatch(
          setAllBasicInfo({
            legalBusinessName: basicData.data.details.legalBusinessName,
            companyAddress: basicData.data.details.companyAddress,
            city: basicData.data.details.city,
            state: basicData.data.details.state,
            pinCode: basicData.data.details.pinCode,
            contactPersonName: basicData.data.details.contactPersonName,
            contactPersonNumber: basicData.data.details.contactPersonNumber,
            contactPersonEmail: basicData.data.details.contactPersonEmail,
            accountDeptEmail: basicData.data.details.accountDeptEmail,
            salesDeptEmail: basicData.data.details.salesDeptEmail,
          })
        );
        dispatch(
          setAllLicenseInfo({
            additionalLicenses: basicData.data.details.additionalLicenses,
            drugLicense: basicData.data.details.drugLicense,
            authorisedDist: basicData.data.details.authorisedDist,
          })
        );
        dispatch(
          setAllBankInfo({
            bankName: basicData.data.details.bankName,
            bankBranch: basicData.data.details.bankBranch,
            accountHolder: basicData.data.details.accountHolder,
            accountNumber: basicData.data.details.accountNumber,
            ifscCode: basicData.data.details.ifscCode,
            chequePhoto: basicData.data.details.chequePhoto,
          })
        );
        dispatch(
          setAllCertificationInfo({
            msmeType: basicData.data.details.msmeType,
            msmeNumber: basicData.data.details.msmeNumber,
            cinNumber: basicData.data.details.cinNumber,
            msmeCertificate: basicData.data.details.msmeCertificate,
            companyRegsCertificate:
              basicData.data.details.companyRegsCertificate,
          })
        );
        dispatch(
          setAllAdditionalInfo({
            additionalNotes: basicData.data.details.additionalNotes,
            additionalAttachment: basicData.data.details.additionalAttachment,
          })
        );
      }
      if (basicData.data.vendorApproval) {
        dispatch(setVendorApprovalDetails(basicData.data.vendorApproval));
      }
    } else {
      dispatch(setPanNumber(basicData?.data?.PAN));
    }
  }, [basicData]);

  useEffect(() => {
    if (refreshDetails) {
      refetch();
    }
  }, [refreshDetails]);

  return (
    <div className='flex flex-col px-14 py-10 bg-[#F5F7F9] min-h-full gap-10'>
      <TopTabs
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      {isBasicDataLoading ? <Spinnner /> : renderSelectedTabSection}
    </div>
  );
};

export default Account;
