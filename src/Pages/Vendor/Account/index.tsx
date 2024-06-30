import { useMemo, useState } from 'react';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import TopTabs from './components/TopTabs';
import { useSearchParams } from 'react-router-dom';

const Account = () => {
  const [queryParams] = useSearchParams();
  const tab = queryParams.get('tab');
  const selectedTab = tab === 'companyInfo' ? 1 : 0;
  const [currentStep, setCurrentStep] = useState(selectedTab);

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
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      {renderSelectedTabSection}
    </div>
  );
};

export default Account;
