import { useMemo, useState } from 'react';
import TopTabs from '../../Components/TopTabs';
import CompanyInfo from './components/CompanyInfo';
import ProfileInfo from './components/ProfileInfo';

const Account = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const TopTabsData = ['Profile Info', 'Company Info'];

  const renderSelectedTabSection = useMemo(() => {
    switch (currentStep) {
      case 0:
        return <ProfileInfo />;
      case 1:
        return <CompanyInfo />;
    }
  }, [currentStep]);

  return (
    <div className='flex flex-col px-14 py-10 bg-[#F5F7F9] min-h-full gap-10'>
      <TopTabs
        TopTabsData={TopTabsData}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      {renderSelectedTabSection}
    </div>
  );
};

export default Account;
