import { useSearchParams } from 'react-router-dom';
import { useGetVendorByIdApi } from '../../../Hooks/API/useRFQApis';
import IMAGES from '../../../Assets/images';
import { extractPdfFilename } from '../../../Utils/Helpers';
import { LuDownload } from 'react-icons/lu';
import Spinnner from '../../../Components/Spinnner';

const VendorDetails = () => {
  const [searchParams] = useSearchParams();
  const vendorId = searchParams.get('id');

  const { data, isFetching } = useGetVendorByIdApi(vendorId!);

  if (isFetching) {
    return <Spinnner />;
  }

  return (
    <div className='flex flex-col px-14 py-10 bg-[#F5F7F9] min-h-full gap-10 flex-1 max-h-[750px] scrollable-div pb-10'>
      <div className='flex justify-between items-center'>
        <p className='text-2xl'>
          <b>{`${data?.firstName} ${data?.lastName}`}</b>
        </p>
      </div>
      <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-lg'>
        <p className='text-xl font-bold'>Tax Information</p>
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Pan Number -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>{data?.PAN}</h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              PAN Document -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(data?.details.panDocument!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() => window.open(data?.details.panDocument)}
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              GST Classification -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details.gstClassification}
            </h2>
          </div>
          {data?.details.gstNumber && (
            <div className='flex w-full items-center gap-5'>
              <h1 className='flex-[0.3] text-xl text-black font-semibold'>
                GST Number -
              </h1>
              <h2 className='text-xl flex-1 text-gray-600 '>
                {data?.details.gstNumber}
              </h2>
            </div>
          )}
          {data?.details.gstCertificate && (
            <div className='flex w-full items-center gap-5'>
              <h1 className='flex-[0.3] text-xl text-black font-semibold'>
                GST Certificate -
              </h1>
              <div className='flex flex-1 gap-3 items-center'>
                <img
                  src={IMAGES.pdIcon}
                  className='h-7 w-7'
                  alt='file'
                />
                <h2 className='text-xl text-gray-600 '>
                  {extractPdfFilename(data?.details.gstCertificate!)}
                </h2>
                <button
                  className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                  onClick={() => window.open(data?.details.gstCertificate)}
                >
                  <LuDownload size={20} />
                </button>
              </div>
            </div>
          )}
          {data?.details.typesOfSupply && (
            <div className='flex w-full items-center gap-5'>
              <h1 className='flex-[0.3] text-xl text-black font-semibold'>
                Type of Supply -
              </h1>
              <h2 className='text-xl flex-1 text-gray-600 '>
                {data?.details.typesOfSupply}
              </h2>
            </div>
          )}
          {data?.details.buisnessAddress && (
            <div className='flex w-full items-center gap-5'>
              <h1 className='flex-[0.3] text-xl text-black font-semibold'>
                Business Address -
              </h1>
              <h2 className='text-xl flex-1 text-gray-600 '>
                {data?.details.buisnessAddress}
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-lg'>
        <p className='text-xl font-bold'>Basic Company Information</p>
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Legal Business Name -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details?.legalBusinessName}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Company Address -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details?.companyAddress}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              City -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details?.city}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              State -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details?.state}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Pin Code -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details?.pinCode}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Contact Person Name -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details?.contactPersonName}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Contact Person Email -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details?.contactPersonEmail}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Contact Person Number -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details?.contactPersonNumber}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Account Dept. Email ID -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details?.accountDeptEmail}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Sales Dept. Email ID -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details?.salesDeptEmail}
            </h2>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-lg'>
        <p className='text-xl font-bold'>Certification</p>
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              MSME Type -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details.msmeType}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              MSME Number -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details.msmeNumber}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              MSME Certificate -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(data?.details.msmeCertificate!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() => window.open(data?.details.msmeCertificate)}
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
          {data?.details.cinNumber && (
            <div className='flex w-full items-center gap-5'>
              <h1 className='flex-[0.3] text-xl text-black font-semibold'>
                CIN Number -
              </h1>
              <h2 className='text-xl flex-1 text-gray-600 '>
                {data?.details.cinNumber}
              </h2>
            </div>
          )}
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Company Registration Certification -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(data?.details.companyRegsCertificate!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() =>
                  window.open(data?.details.companyRegsCertificate)
                }
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-lg'>
        <p className='text-xl font-bold'>Uploaded License Section</p>
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Authorised Distributor Letter -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(data?.details?.authorisedDist!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() => window.open(data?.details?.authorisedDist)}
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Drug License -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(data?.details?.drugLicense!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() => window.open(data?.details?.drugLicense)}
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Other Licenses -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(data?.details?.additionalLicenses!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() => window.open(data?.details?.additionalLicenses)}
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-lg'>
        <p className='text-xl font-bold'>Additional Information</p>
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Additional Attachement -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {data?.details.additionalNotes}
            </h2>
          </div>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Additional Attachement -
            </h1>
            <div className='flex flex-1 gap-3 items-center'>
              <img
                src={IMAGES.pdIcon}
                className='h-7 w-7'
                alt='file'
              />
              <h2 className='text-xl text-gray-600 '>
                {extractPdfFilename(data?.details.additionalAttachement!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() => window.open(data?.details.additionalAttachement)}
              >
                <LuDownload size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
