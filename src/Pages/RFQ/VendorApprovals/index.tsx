import { useMemo, useState } from 'react';
import TopTabs from '../../../Components/TopTabs';
import { DUMMYVENDORDATA } from '../../../seeds/dummySeeds';
import VendorsTable from './components/VendorsTable';

const TopTabsData = ['PENDING', 'APPROVED', 'RETURNED'];

const VendorApprovals = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const filteredData = useMemo(() => {
    if (!DUMMYVENDORDATA) return [];
    switch (currentStep) {
      case 0:
        return DUMMYVENDORDATA.filter((vendor) => vendor.STATUS === 'Pending');
      case 1:
        return DUMMYVENDORDATA.filter((vendor) => vendor.STATUS === 'Approved');
      case 2:
        return DUMMYVENDORDATA.filter((vendor) => vendor.STATUS === 'Returned');
      default:
        return [];
    }
  }, [currentStep]);

  return (
    <div className='flex flex-col px-14 py-10 gap-10 bg-[#F5F7F9] min-h-full'>
      <p className='font-bold text-3xl'>Vendors</p>

      <TopTabs
        TopTabsData={TopTabsData}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        fullBar={true}
      />
      <VendorsTable data={filteredData} />
    </div>
  );
};

export default VendorApprovals;
