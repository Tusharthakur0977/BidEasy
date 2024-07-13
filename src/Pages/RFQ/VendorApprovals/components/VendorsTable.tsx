import { Dispatch, FC, SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import VendorRejectionModal from '../../../../Components/Modals/VendorRejectionModal';
import { useVendorActionApi } from '../../../../Hooks/API/useRFQApis';
import { setVendorRejectionModal } from '../../../../redux/modalSlices/modalSlice';
import { useAppDispatch } from '../../../../redux/store';
import { VENDORSTABLEHEADINGS } from '../../../../seeds/CompanyInfoData';
import { VendorInList } from '../../../../typings/RFQTypes';
import { formatDate } from '../../../../Utils/Helpers';

type VendorTableProps = {
  currentStep: number;
  data: VendorInList[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
};

const VendorsTable: FC<VendorTableProps> = ({
  data,
  currentPage,
  setCurrentPage,
  limit,
  setLimit,
  currentStep,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const vendorActionApi = useVendorActionApi();

  const [selectedVendorId, setSelectedVendorId] = useState('');

  const totalPages = Math.ceil(data.length / limit);
  const currentData = data.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowClick = (id: string) => {
    navigate(`vendor_details?id=${id}`);
  };

  const handleApproveVendor = (vendorId: string) => {
    vendorActionApi
      .mutateAsync({
        status: 'APPROVED',
        vendorId,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRejectVendor = (vendorId: string) => {
    setSelectedVendorId(vendorId);
    dispatch(setVendorRejectionModal(true));
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
                className='px-6 py-3'
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='border-t-2 border-b-2'>
          {currentData.map((vendor) => (
            <tr
              role='link'
              key={vendor['id']}
              className='bg-white border-b'
            >
              <td className='px-6 py-4 font-bold whitespace-nowrap'>
                {`${vendor['firstName']} ${vendor['lastName']}`}
              </td>
              <td className='px-6 py-4'>{vendor.PAN}</td>
              <td className='px-6 py-4'>{vendor.gstNumber}</td>
              <td className='px-6 py-4'>{formatDate(vendor.updatedAt)}</td>
              <td className='px-6 py-4'>{vendor['email']}</td>
              <td className='px-6 py-4'>{vendor['vendorCode']}</td>
              <td className='px-6 py-4 flex gap-4'>
                {currentStep === 0 && (
                  <button
                    onClick={() => handleApproveVendor(vendor.id)}
                    className='font-medium text-blue-600 hover:underline'
                  >
                    Approve
                  </button>
                )}
                {currentStep === 0 && (
                  <button
                    onClick={() => handleRejectVendor(vendor.id)}
                    className='font-medium text-blue-600 hover:underline'
                  >
                    Reject
                  </button>
                )}
                <button
                  onClick={() => handleRowClick(vendor.id)}
                  className='font-medium text-blue-600 hover:underline'
                >
                  View Details
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
            {(currentPage - 1) * limit + 1}-
            {Math.min(currentPage * limit, data.length)}
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
      <VendorRejectionModal vendorId={selectedVendorId} />
    </div>
  );
};

export default VendorsTable;
