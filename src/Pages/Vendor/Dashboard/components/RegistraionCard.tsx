import { Link } from 'react-router-dom';
import {
  getVendorApprovalDetails,
  getVendorBasicDetails,
} from '../../../../redux/VendorSlices/VendorDataSlice';
import { useAppSelector } from '../../../../redux/store';

const RegistraionCard = () => {
  const vendorBasicDetails = useAppSelector(getVendorBasicDetails);
  const vendorApprovalDetails = useAppSelector(getVendorApprovalDetails);

  return (
    <div className='flex rounded-md border-l-8 bg-white shadow-lg border-[#D55EE1] px-5 py-8'>
      <div className='flex flex-1 md:flex-[0.8] md:flex-col  gap-10 justify-between'>
        <p className='text-2xl font-medium'>Vendor Registration</p>
        <div className='flex gap-32 items-center px-2'>
          <div className='flex flex-col gap-1'>
            <p>Status</p>
            <p className='font-medium'>
              {vendorApprovalDetails?.overAllapprovalStatus}
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <p>Vendor Code</p>
            <p className='font-medium'>
              {vendorBasicDetails.vendorCode || 'Not Registered'}
            </p>
          </div>
        </div>
      </div>
      <Link
        to={'/vendor/account?tab=companyInfo'}
        className='flex-[0.2] self-start text-white bg-blue-700 font-medium focus:ring-4 focus:outline-none focus:ring-white rounded-lg text-md w-full px-5 py-3 text-center'
      >
        {vendorBasicDetails.isDetailsRegistered ? 'Manage' : 'Register'}
      </Link>
    </div>
  );
};

export default RegistraionCard;
