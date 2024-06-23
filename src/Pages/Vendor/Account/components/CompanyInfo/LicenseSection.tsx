import { useVendor } from '../../../../../Context/VendorContext';

const LicenseSection = () => {
  const {
    authorisedDist,
    setAuthorisedDist,
    drugLicense,
    setDrugLicense,
    additionalLicenses,
    setAdditionalLicenses,
  } = useVendor();

  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-md'>
      <p className='text-xl font-medium'>License Upload Section</p>

      <div className='grid gap-6 mb-6 md:grid-cols-4'>
        <div className='relative z-0 w-full mb-5 group col-span-3 flex items-center gap-5'>
          <p className='font-medium flex-1'>Authorised Distributor Letter</p>
          <div>
            <input
              value={authorisedDist}
              onChange={(e) => setAuthorisedDist(e.target.files![0])}
              type='file'
              className='block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      '
            />
          </div>
        </div>
        <div className='relative z-0 w-full mb-5 group col-span-3 flex items-center gap-5'>
          <p className='font-medium flex-1'>Drug License</p>
          <div>
            <input
              value={drugLicense}
              onChange={(e) => setDrugLicense(e.target.files![0])}
              type='file'
              className='block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      '
            />
          </div>
        </div>

        <div className='relative z-0 w-full mb-5 group col-span-3 flex items-center gap-5'>
          <p className='font-medium flex-1'>Other Licenses</p>
          <div>
            <input
              value={additionalLicenses}
              onChange={(e) => setAdditionalLicenses(e.target.files)}
              type='file'
              className='block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-600 file:text-white
        hover:file:bg-blue-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseSection;
