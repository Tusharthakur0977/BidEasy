import COLORS from '../../../../Assets/colors';
import ICONS from '../../../../Assets/icons';
import SVGIcon from '../../../../Components/SVGIcon';
import { useAppSelector } from '../../../../redux/store';
import { getVendorBasicDetails } from '../../../../redux/VendorSlices/VendorDataSlice';

const WelcomeCard = () => {
  const vendorBasicDetails = useAppSelector(getVendorBasicDetails);

  const getFullUserName = () => {
    return vendorBasicDetails.firstName + ' ' + vendorBasicDetails.lastName;
  };

  return (
    <div className='bg-white p-4 my-6 rounded-md flex flex-col'>
      <div className='flex justify-between items-center px-5'>
        <p className='text-2xl'>
          Welcome <b>{getFullUserName()}!</b>
        </p>
        <p className='text-lg'>
          PAN: <strong>{vendorBasicDetails.PAN} </strong>
        </p>
      </div>
      <div className='h-[1px] w-full bg-gray-300 my-4' />
      <div className='flex flex-col px-4 gap-3'>
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
            New Vendors should complete vendor registration first. Submit your
            request by clickig <strong>Register</strong> on the first card.
          </li>
          <li>
            Bank Information card willbe disabled until the vendor registration
            request is submitted.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomeCard;
