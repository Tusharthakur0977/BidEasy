import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
import { useVendorActionApi } from '../../Hooks/API/useRFQApis';
import { setVendorRejectionModal } from '../../redux/modalSlices/modalSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

type VendorRejectionModalProps = {
  vendorId: string;
};

const VendorRejectionModal: FC<VendorRejectionModalProps> = ({ vendorId }) => {
  const dispatch = useAppDispatch();
  const { vendorRejectionModal } = useAppSelector((state) => state.modalSlice);

  const vendorActionApi = useVendorActionApi();

  const [rejectionMessage, setRejectionMessage] = useState('');

  const closeModal = () => {
    dispatch(setVendorRejectionModal(false));
    setRejectionMessage('');
  };

  const handleSubmit = () => {
    if (vendorId) {
      vendorActionApi
        .mutateAsync({
          status: 'REJECTED',
          vendorId,
          rejectionReason: rejectionMessage,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message);
            closeModal();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Modal
      isOpen={vendorRejectionModal}
      onRequestClose={closeModal}
      contentLabel='Invite New Vendor'
      overlayClassName='fixed inset-0 bg-black bg-opacity-50 z-50'
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[70%] flex flex-col rounded-md px-10 py-5 gap-20'
    >
      <div className='w-full text-center'>
        <h1 className='font-bold text-3xl'>Reject Vendor</h1>
        <IoMdClose
          className='absolute top-5 right-5 cursor-pointer'
          onClick={closeModal}
          size={30}
        />
      </div>

      <div className='relative z-0 w-full mb-5 flex items-center justify-start gap-20'>
        <label
          htmlFor='rejectionMessage'
          className='font-semibold text-xl flex-[0.5]'
        >
          Rejection Message
        </label>
        <textarea
          value={rejectionMessage}
          onChange={(e) => setRejectionMessage(e.target.value)}
          rows={4}
          name='rejectionMessage'
          id='rejectionMessage'
          className='flex-1 py-2 px-0 text-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder='Please enter a rejection message '
        />
      </div>

      <div className='flex items-center justify-end gap-10 mt-5'>
        <button
          onClick={closeModal}
          type='button'
          className={`text-blue-700 bg-white font-medium rounded-lg text-sm w-full sm:w-auto self-end px-10 py-2.5 text-center`}
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type='button'
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto self-end px-10 py-2.5 text-center`}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default VendorRejectionModal;
