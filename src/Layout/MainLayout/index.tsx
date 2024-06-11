import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const MainLayout = () => {
  return (
    <div className='h-screen w-screen flex'>
      <div className='flex flex-[0.25]'>
        <Sidebar />
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
