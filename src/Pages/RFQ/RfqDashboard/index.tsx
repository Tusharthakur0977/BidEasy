import React from 'react';
import { useDummyApi } from '../../../Hooks/API/useVendorApis';

const RfqDashboard = () => {
  const { data } = useDummyApi();

  return <div>RfqDashboard</div>;
};

export default RfqDashboard;
