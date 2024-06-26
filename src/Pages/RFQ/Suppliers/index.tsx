import React, { useState } from 'react';
import InviteNewVendor from '../../../Components/Modals/InviteNewVendor';
import { useModal } from '../../../Context/ModalContext';

const Suppliers = () => {
  const { inviteVendorModal, setInviteVendorModal } = useModal();

  return (
    <div className='flex flex-wrap w-full'>
      <div className='w-full flex justify-between items-center'>
        <p className='font-bold text-3xl'>Vendors List</p>
        <button
          onClick={() => setInviteVendorModal(true)}
          className='px-10 py-2 rounded-lg text-lg font-bold bg-cyan-300'
        >
          Add new Vendor
        </button>
      </div>
      <InviteNewVendor />
    </div>
  );
};

export default Suppliers;
