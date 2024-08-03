import { useMemo, useState } from 'react';
import { useGetAllVendorListApi } from '../../../../Hooks/API/useRFQApis';
import {
  setCurrentAuctioStep,
  setSelectedVendors,
} from '../../../../redux/BuyerSlices/auctionSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import VendorsTable from '../../VendorApprovals/components/VendorsTable';

const SuppliersList = () => {
  const dispatch = useAppDispatch();
  const { currentStep, selectedVendors } = useAppSelector(
    (state) => state.auctionSlice
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data } = useGetAllVendorListApi(currentPage, limit);

  const handlesave = () => {
    dispatch(setCurrentAuctioStep(currentStep + 1));
  };

  const handleBackClick = () => {
    dispatch(setCurrentAuctioStep(currentStep - 1));
  };

  const approvedData = useMemo(() => {
    return (
      data?.vendors?.filter(
        (vendor) => vendor?.overAllApprovalStatus === 'APPROVED'
      ) ?? []
    );
  }, [data?.vendors]);

  const onSelectRow = (vendorId: string) => {
    const updatedSelectedVendors = selectedVendors.includes(vendorId)
      ? selectedVendors.filter((id) => id !== vendorId)
      : [...selectedVendors, vendorId];

    dispatch(setSelectedVendors(updatedSelectedVendors));
  };

  return (
    <div className=' py-3 items-center rounded-md flex-1 relative'>
      <div>
        <h1 className='text-3xl font-bold'>Suppliers List</h1>
      </div>
      <hr />

      <VendorsTable
        currentStep={currentStep}
        data={approvedData ?? []}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        setLimit={setLimit}
        onSelectRow={onSelectRow}
        isSelectable={true}
        selectedItemsId={selectedVendors}
      />
      <div className=' absolute bottom-0  w-full flex justify-between px-10 md:px-10 lg:px-20'>
        <button
          className='py-3  px-10  bg-blue-500 text-white rounded-md'
          onClick={handleBackClick}
        >
          Prev
        </button>
        <button
          className='py-3 px-10 bg-blue-500 text-white rounded-md'
          onClick={handlesave}
        >
          {' '}
          Save{' '}
        </button>
      </div>
    </div>
  );
};

export default SuppliersList;
