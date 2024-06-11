import React, { useMemo, useState } from 'react';
import TopTabs from './components/TopTabs';
import ProfileInfo from './components/ProfileInfo';
import CompanyInfo from './components/CompanyInfo';

const Account = () => {
  const [currentStep, setCurrentStep] = useState(0);

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
