import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
import { setInviteVendorModal } from '../../redux/modalSlices/modalSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  isValidEmail,
  isValidMobileNumber,
  isValidPAN,
} from '../../Utils/Helpers';
import {
  useCheckVendorFOrPanApi,
  useInviteVendorApi,
} from '../../Hooks/API/useRFQApis';

interface VendorDetails {
  [key: string]: string;
  name: string;
  email: string;
  number: string;
  pan: string;
}

const FIELDS = [
  { name: 'name', label: 'Vendor Name', placeholder: 'Vendor Name' },
  { name: 'email', label: 'Email', placeholder: 'Email' },
  { name: 'number', label: 'Contact Number', placeholder: 'Contact Number' },
  {
    name: 'pan',
    label: 'Check Duplicate via PAN',
    placeholder: 'PAN Number',
  },
];

const InviteNewVendor = () => {
  const dispatch = useAppDispatch();
  const { inviteVendorModal } = useAppSelector((state) => state.modalSlice);

  const inviteVendorAPi = useInviteVendorApi();
  const verifyPAnAPi = useCheckVendorFOrPanApi();

  const [vendorDetails, setVendorDetails] = useState<VendorDetails>({
    name: '',
    email: '',
    number: '',
    pan: '',
  });
  const [isPanVerified, setIsPanVerified] = useState(false);

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
    dispatch(setInviteVendorModal(false));
  };

  const verifyPan = async () => {
    try {
      const res = await verifyPAnAPi.mutateAsync({ PAN: vendorDetails.pan });
      if (res.status === 200) {
        if (res.data.exists) {
          toast.error('Vendor with this PAN number already exists.');
          setIsPanVerified(false);
        } else {
          toast.success('PAN number is valid and unique.');
          setIsPanVerified(true);
        }
      }
    } catch (error) {
      toast.error('Error verifying PAN number. Please try again.');
      setIsPanVerified(false);
    }
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

      inviteVendorAPi
        .mutateAsync({
          email: vendorDetails.email,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success('Vendor Invited Successfully');
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error('Oops! Something went wrong. PLease try again later');
        });

      // Add your submit logic here
    } else {
      toast.error('Please fill all the fields.');
    }
  };
  return (
    <Modal
      isOpen={inviteVendorModal}
      onRequestClose={closeModal}
      contentLabel='Invite New Vendor'
      overlayClassName='fixed inset-0 bg-black bg-opacity-50 z-50'
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[70%] flex flex-col rounded-md px-10 py-5 gap-20'
    >
      <div className='w-full text-center'>
        <h1 className='font-bold text-3xl'>Invite New Vendor</h1>
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
              type={field.name === 'number' ? 'number' : 'text'}
              name={field.name}
              id={field.name}
              className='flex-1 py-2 px-0 text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder={field.placeholder}
            />
            {field.name === 'pan' && (
              <button
                // onClick={verifyPAnAPi}
                disabled={!canSubmit}
                className={`mt-5'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto self-end px-10 py-2.5 text-center`}
              >
                Submit
              </button>
            )}
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
        Submit
      </button>
    </Modal>
  );
};

export default InviteNewVendor;
