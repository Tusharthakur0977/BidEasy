import Modal from 'react-modal';
import { useModal } from '../../Context/ModalContext';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const InviteNewVendor = () => {
  const { inviteVendorModal, setInviteVendorModal } = useModal();
  const [canSubmit, setCanSubmit] = useState(true);
  const closeInviteVendorModal = () => {
    setInviteVendorModal(false);
  };

  return (
    <Modal
      isOpen={inviteVendorModal}
      onRequestClose={closeInviteVendorModal}
      contentLabel='Invite New Vendor'
      overlayClassName='fixed inset-0 bg-black bg-opacity-50 z-50'
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[70%] flex flex-col rounded-md px-10 py-5 gap-20'
    >
      <div className='w-full text-center'>
        <h1 className='font-bold text-3xl'>Invite New Vendor</h1>
        <IoMdClose
          className='absolute top-5 right-5 cursor-pointer'
          onClick={closeInviteVendorModal}
          size={30}
        />
      </div>

      <div className='grid gap-6 mb-6 md:grid-cols-1 w-[80%] self-center'>
        <div className='relative z-0 w-full mb-5 flex items-center justify-start gap-20'>
          <label
            htmlFor='vendorName'
            className='font-semibold text-xl flex-[0.5]'
          >
            Vendor Name
          </label>
          <input
            onChange={(e) => {}}
            type='text'
            name='vendorName'
            id='vendorName'
            className='flex-1 py-2 px-0 text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder='Vendor Name'
          />
        </div>
        <div className='relative z-0 w-full mb-5 flex items-center justify-start gap-20'>
          <label
            htmlFor='email'
            className='font-semibold text-xl flex-[0.5]'
          >
            Email
          </label>
          <input
            onChange={(e) => {}}
            type='text'
            name='email'
            id='email'
            className='flex-1 py-2 px-0 text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder='Email'
          />
        </div>
        <div className='relative z-0 w-full mb-5 flex items-center justify-start gap-20'>
          <label
            htmlFor='contactNumber'
            className='font-semibold text-xl flex-[0.5]'
          >
            Contact Number
          </label>
          <input
            onChange={(e) => {}}
            type='text'
            name='contactNumber'
            id='contactNumber'
            className='flex-1 py-2 px-0 text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder='Contact Number'
          />
        </div>
        <div className='relative z-0 w-full mb-5 flex items-center justify-start gap-20'>
          <label
            htmlFor='panNumber'
            className='font-semibold text-xl flex-[0.5]'
          >
            Check Duplicate via PAN
          </label>
          <input
            onChange={(e) => {}}
            type='text'
            name='panNumber'
            id='panNumber'
            className='flex-1 py-2 px-0 text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder='Contact Number'
          />
        </div>
      </div>

      <button
        onClick={() => {}}
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
