import { useMemo, useState } from 'react';
import TopTabs from '../../../Components/TopTabs';
import { useGetAllVendorListApi } from '../../../Hooks/API/useRFQApis';
import VendorsTable from './components/VendorsTable';

const TopTabsData = ['PENDING', 'APPROVED'];

const VendorApprovals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data } = useGetAllVendorListApi(currentPage, limit);

  const [currentStep, setCurrentStep] = useState(0);

  const filteredData = useMemo(() => {
    if (data?.vendors.length === 0) return [];
    switch (currentStep) {
      case 0:
        return data?.vendors?.filter(
          (vendor) => vendor?.overAllApprovalStatus === 'PENDING'
        );
      case 1:
        return data?.vendors?.filter(
          (vendor) => vendor?.overAllApprovalStatus === 'APPROVED'
        );
      default:
        return [];
    }
  }, [currentStep, data?.vendors]);

  return (
    <div className='flex flex-col px-14 py-10 gap-10 bg-[#F5F7F9] min-h-full'>
      <p className='font-bold text-3xl'>Vendors</p>

      <TopTabs
        TopTabsData={TopTabsData}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <VendorsTable
        currentStep={currentStep}
        data={filteredData ?? []}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        setLimit={setLimit}
        isSelectable={false}
      />
    </div>
  );
};

export default VendorApprovals;
