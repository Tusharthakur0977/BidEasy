import EditProfileModal from '../../../../../Components/Modals/EditProfile';
import { setEditProfileMOdal } from '../../../../../redux/modalSlices/modalSlice';
import { useAppDispatch, useAppSelector } from '../../../../../redux/store';
import { getProfileDetails } from '../../../../../redux/VendorSlices/profileSLice';

const ProfileInfo = () => {
  const dispatch = useAppDispatch();
  const vendorProfileDetails = useAppSelector(getProfileDetails);

  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-md'>
      <div className='flex w-full pb-3 justify-between items-center border-b-[1px] border-gray-300'>
        <p className='text-xl font-bold'>Your Profile</p>
        <button
          onClick={() => {
            dispatch(setEditProfileMOdal(true));
          }}
          type='submit'
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center`}
        >
          Edit Profile
        </button>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex w-full items-center gap-5'>
          <h1 className='flex-[0.3] text-xl text-black font-semibold'>
            First Name -
          </h1>
          <h2 className='text-xl flex-1 text-gray-600 '>
            {vendorProfileDetails?.firstName}
          </h2>
        </div>
        <div className='flex w-full items-center gap-5'>
          <h1 className='flex-[0.3] text-xl text-black font-semibold'>
            Last Name -
          </h1>
          <h2 className='text-xl flex-1 text-gray-600 '>
            {vendorProfileDetails?.lastName}
          </h2>
        </div>
        <div className='flex w-full items-center gap-5'>
          <h1 className='flex-[0.3] text-xl text-black font-semibold'>
            Email -
          </h1>
          <h2 className='text-xl flex-1 text-gray-600 '>
            {vendorProfileDetails?.email}
          </h2>
        </div>
        <div className='flex w-full items-center gap-5'>
          <h1 className='flex-[0.3] text-xl text-black font-semibold'>
            Company Name -
          </h1>
          <h2 className='text-xl flex-1 text-gray-600 '>
            {vendorProfileDetails?.companyName}
          </h2>
        </div>
        <div className='flex w-full items-center gap-5'>
          <h1 className='flex-[0.3] text-xl text-black font-semibold'>
            Pan Number
          </h1>
          <h2 className='text-xl flex-1 text-gray-600 '>
            {vendorProfileDetails?.panNumber}
          </h2>
        </div>
      </div>
      <EditProfileModal />
    </div>
  );
};

export default ProfileInfo;
