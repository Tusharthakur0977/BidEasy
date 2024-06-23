import { useVendor } from '../../../../../Context/VendorContext';

const AdditionalInfoCard = () => {
  const {
    additionalNotes,
    setAdditionalNotes,
    additionalAttachement,
    setadditionalAttachement,
  } = useVendor();
  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-md'>
      <p className='text-xl font-medium'>Additional Information</p>

      <div className='grid gap-6 mb-6 md:grid-cols-4'>
        <div className='relative z-0 w-full mb-5 group col-span-2 self-end'>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            name='msmeNumber'
            id='msmeNumber'
            className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
            required
          />
          <label
            htmlFor='msmeNumber'
            className='peer-focus:font-bold absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Additional Notes
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group col-span-3 flex items-center gap-5'>
          <p className='font-medium flex-1'>Additional Attachement</p>
          <div>
            <input
              onChange={(e) => setadditionalAttachement(e.target.files![0])}
              value={additionalAttachement}
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
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoCard;
