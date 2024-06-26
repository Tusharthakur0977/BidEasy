import { FC, useState } from 'react';
import { VENDORSTABLEHEADINGS } from '../../../../seeds/CompanyInfoData';

type VendorTableProps = {
  data: any[];
};

const VendorsTable: FC<VendorTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className='relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg mt-4'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-base font-semibold text-gray-700 uppercase bg-blue-100'>
          <tr>
            {VENDORSTABLEHEADINGS.map((title) => (
              <th
                key={title}
                scope='col'
                className='px-6 py-3' // Increased font size for headers
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='border-t-2 border-b-2'>
          {currentData.map((vendor) => (
            <tr
              key={vendor['VENDOR ID']}
              className='bg-white border-b hover:bg-gray-50'
            >
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
              >
                {vendor['VENDOR NAME']}
              </th>
              <td className='px-6 py-4'>{vendor.PAN}</td>
              <td className='px-6 py-4'>{vendor.GST}</td>
              <td className='px-6 py-4'>{vendor.DATE}</td>
              <td className='px-6 py-4'>{vendor['VENDOR ID']}</td>
              <td className='px-6 py-4'>{vendor['VENDOR CODE']}</td>
              <td className='px-6 py-4 flex gap-10'>
                <button className='font-medium text-blue-600 hover:underline'>
                  Approve
                </button>
                <button className='font-medium text-blue-600 hover:underline'>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav
        className='flex items-center flex-column flex-wrap md:flex-row justify-between px-4 py-2'
        aria-label='Table navigation'
      >
        <span className='font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto'>
          Showing{' '}
          <span className='font-semibold text-gray-900'>
            {(currentPage - 1) * rowsPerPage + 1}-
            {Math.min(currentPage * rowsPerPage, data.length)}
          </span>{' '}
          of <span className='font-semibold text-gray-900'>{data.length}</span>
        </span>
        <ul className='inline-flex -space-x-px rtl:space-x-reverse text-sm h-8'>
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
                className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
                  currentPage === page
                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                    : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                }`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default VendorsTable;
