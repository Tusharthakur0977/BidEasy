import { useEffect } from 'react';
import Spinnner from '../../../Components/Spinnner';
import { useGetVendorBasicDetailsApi } from '../../../Hooks/API/useVendorApis';
import { useAppDispatch } from '../../../redux/store';
import {
  setVendorAccountDetails,
  setVendorApprovalDetails,
  setVendorBasicDetails,
} from '../../../redux/VendorSlices/VendorDataSlice';
import RegistraionCard from './components/RegistraionCard';
import WelcomeCard from './components/WelcomeCard';

const VendorDashboard = () => {
  const dispatch = useAppDispatch();
  const { data: basicData, isLoading } = useGetVendorBasicDetailsApi();

  useEffect(() => {
    if (basicData?.data) {
      dispatch(setVendorBasicDetails(basicData.data));
      if (basicData.data.details) {
        dispatch(setVendorAccountDetails(basicData.data.details));
      }
      if (basicData.data.vendorApproval) {
        dispatch(setVendorApprovalDetails(basicData.data.vendorApproval));
      }
    }
  }, [basicData, dispatch]);

  if (isLoading) {
    return <Spinnner />;
  }

  return (
    <div className='flex flex-col px-14 py-10 bg-[#F5F7F9] min-h-full'>
      <p className='font-bold text-3xl'>Dashboard</p>
      <WelcomeCard />

      <div className='flex flex-col w-full my-5 gap-10'>
        <p className='text-2xl font-medium'>Registration & Bank Details</p>

        <RegistraionCard />
      </div>
    </div>
  );
};

export default VendorDashboard;
