import React from 'react';
import { Link } from 'react-router-dom';

const HeadLinks = [
  {
    title: 'User Manual',
    url: '/user-manual',
  },
  {
    title: 'Document Checklist',
    url: '/docs-checklist',
  },
  {
    title: 'Help Video',
    url: '/help-video',
  },
  {
    title: 'Support',
    url: '/support',
  },
];

const HeadBar = () => {
  return (
    <div className='flex flex-col gap-10'>
      <p className='text-blue-600 font-medium text-3xl'>SUPPLIER</p>
      <div className='flex gap-10'>
        {HeadLinks.map((links, index) => (
          <Link
            key={links.title + index.toString()}
            to={links.url}
            className='px-14 py-3 rounded-3xl border-gray-500-600 border-[0.4px] shadow-lg'
          >
            <p>{links.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeadBar;
