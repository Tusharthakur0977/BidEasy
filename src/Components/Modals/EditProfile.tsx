import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
import { setEditProfileMOdal } from '../../redux/modalSlices/modalSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  isValidEmail,
  isValidMobileNumber,
  isValidPAN,
} from '../../Utils/Helpers';
import { getProfileDetails } from '../../redux/VendorSlices/profileSLice';

interface VendorDetails {
  [key: string]: string;
  firstName: string;
  lastName: string;
  email: string;
  panNumber: string;
}

const FIELDS = [
  {
    name: 'firstName',
    label: 'Vendor Name',
    placeholder: 'Vendor Name',
    disabled: false,
  },
  {
    name: 'lastName',
    label: 'Vendor Name',
    placeholder: 'Vendor Name',
    disabled: false,
  },
  { name: 'email', label: 'Email', placeholder: 'Email', disabled: true },
  {
    name: 'companyName',
    label: 'Company Name',
    placeholder: 'Company Name',
    disabled: false,
  },
  {
    name: 'panNumber',
    label: 'Check Duplicate via PAN',
    placeholder: 'PAN Number',
    disabled: true,
  },
];

const EditProfileModal = () => {
  const dispatch = useAppDispatch();
  const { editProfileModal } = useAppSelector((state) => state.modalSlice);
  const vendorProfileDetails = useAppSelector(getProfileDetails);

  const [vendorDetails, setVendorDetails] = useState<VendorDetails>({
    firstName: vendorProfileDetails.firstName,
    lastName: vendorProfileDetails.lastName,
    email: vendorProfileDetails.email,
    companyName: vendorProfileDetails.companyName,
    panNumber: vendorProfileDetails.panNumber,
  });

  const [canSubmit, setCanSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVendorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  useEffect(() => {
    const allFieldsFilled = Object.values(vendorDetails).every(
      (field) => field.trim() !== ''
    );
    setCanSubmit(allFieldsFilled);
  }, [vendorDetails]);

  const closeModal = () => {
    dispatch(setEditProfileMOdal(false));
  };

  const handleSubmit = () => {
    if (canSubmit) {
      if (!isValidEmail(vendorDetails.email)) {
        toast.error('Please enter a valid email');
        return;
      }
      if (!isValidMobileNumber(vendorDetails.number)) {
        toast.error('Please enter a valid Contact Number');
        return;
      }
      if (!isValidPAN(vendorDetails.pan)) {
        toast.error('Please enter a valid PAN Number');
        return;
      }
      // Add your submit logic here
      toast.success('Form submitted successfully!');
    } else {
      toast.error('Please fill all the fields.');
    }
  };

  useEffect(() => {
    const { firstName, lastName, companyName } = vendorProfileDetails;
    const fieldsChanged =
      vendorDetails.firstName !== firstName ||
      vendorDetails.lastName !== lastName ||
      vendorDetails.companyName !== companyName;
    setCanSubmit(fieldsChanged);
  }, [vendorDetails, vendorProfileDetails]);

  return (
    <Modal
      isOpen={editProfileModal}
      onRequestClose={closeModal}
      contentLabel='Invite New Vendor'
      overlayClassName='fixed inset-0 bg-black bg-opacity-50 z-50'
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[70%] flex flex-col rounded-md px-10 py-5 gap-20'
    >
      <div className='w-full text-center'>
        <h1 className='font-bold text-3xl'>Update Profile Details</h1>
        <IoMdClose
          className='absolute top-5 right-5 cursor-pointer'
          onClick={closeModal}
          size={30}
        />
      </div>

      <div className='grid gap-6 mb-6 md:grid-cols-1 w-[80%] self-center'>
        {FIELDS.map((field) => (
          <div
            key={field.name}
            className='relative z-0 w-full mb-5 flex items-center justify-start gap-20'
          >
            <label
              htmlFor={field.name}
              className='font-semibold text-xl flex-[0.5]'
            >
              {field.label}
            </label>
            <input
              value={vendorDetails[field.name]}
              onChange={handleChange}
              type='text'
              name={field.name}
              id={field.name}
              disabled={field.disabled}
              className={`flex-1 py-2 px-0 text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                field.disabled && 'cursor-not-allowed'
              }`}
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!canSubmit}
        type='submit'
        className={`mt-5 ${
          canSubmit
            ? 'text-white bg-blue-700 hover:bg-blue-800'
            : 'text-gray-500 bg-gray-300 hover:bg-gray-500 cursor-not-allowed'
        } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto self-end px-10 py-2.5 text-center`}
      >
        Update
      </button>
    </Modal>
  );
};

export default EditProfileModal;
