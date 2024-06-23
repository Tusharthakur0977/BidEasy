import BankDetailsCard from './components/BankDetailsCard';
import RegistraionCard from './components/RegistraionCard';
import WelcomeCard from './components/WelcomeCard';

const VendorDashboard = () => {
  return (
    <div className='flex flex-col px-14 py-10 bg-[#F5F7F9] min-h-full'>
      <p className='font-bold text-3xl'>Dashboard</p>
      <WelcomeCard />

      <div className='flex flex-col w-full my-5 gap-10'>
        <p className='text-2xl font-medium'>Registration & Bank Details</p>

        <RegistraionCard />
        <BankDetailsCard />
      </div>
    </div>
  );
};

export default VendorDashboard;
