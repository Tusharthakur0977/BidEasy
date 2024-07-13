import { FC } from 'react';
import IMAGES from '../../../../../Assets/images';
import { useAppDispatch, useAppSelector } from '../../../../../redux/store';
import {
  setBuisnessAddress,
  setGstCertificate,
  setGstClassification,
  setGstNumber,
  setPanDocument,
  setPanNumber,
  setTypesOfSupply,
} from '../../../../../redux/VendorSlices/taxSlice';
import {
  getVendorAccountDetails,
  getVendorBasicDetails,
} from '../../../../../redux/VendorSlices/VendorDataSlice';
import {
  BusinessAddressData,
  GstClassificationData,
  TypesOfSupplyData,
} from '../../../../../seeds/CompanyInfoData';
import { extractPdfFilename } from '../../../../../Utils/Helpers';
import { LuDownload } from 'react-icons/lu';

type TaxInfoProps = {};

const TaxInfo: FC<TaxInfoProps> = () => {
  const dispatch = useAppDispatch();

  const vendorBasicDetails = useAppSelector(getVendorBasicDetails);
  const vendorAcocuntDetails = useAppSelector(getVendorAccountDetails);

  const {
    panNumber,
    gstClassification,
    gstNumber,
    buisnessAddress,
    typesOfSupply,
  } = useAppSelector((state) => state.taxInfo);

  return (
    <div className='flex flex-col px-5 gap-10 bg-white py-6 shadow-lg rounded-lg'>
      <div className='flex w-full pb-3 justify-between items-center border-b-[1px] border-gray-300'>
        <p className='text-xl font-bold'>Tax Information</p>
        {vendorBasicDetails.isDetailsRegistered && (
          <button
            onClick={() => {}}
            type='submit'
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center`}
          >
            Edit Tax Details
          </button>
        )}
      </div>
      {vendorBasicDetails.isDetailsRegistered ? (
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center gap-5'>
            <h1 className='flex-[0.3] text-xl text-black font-semibold'>
              Pan Number -
            </h1>
            <h2 className='text-xl flex-1 text-gray-600 '>
              {vendorBasicDetails?.PAN}
            </h2>
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
                {extractPdfFilename(vendorAcocuntDetails?.panDocument!)}
              </h2>
              <button
                className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                onClick={() => window.open(vendorAcocuntDetails?.panDocument)}
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
              {vendorAcocuntDetails?.gstClassification}
            </h2>
          </div>
          {vendorAcocuntDetails?.gstNumber && (
            <div className='flex w-full items-center gap-5'>
              <h1 className='flex-[0.3] text-xl text-black font-semibold'>
                GST Number -
              </h1>
              <h2 className='text-xl flex-1 text-gray-600 '>
                {vendorAcocuntDetails?.gstNumber}
              </h2>
            </div>
          )}
          {vendorAcocuntDetails?.gstCertificate && (
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
                  {extractPdfFilename(vendorAcocuntDetails?.gstCertificate!)}
                </h2>
                <button
                  className='bg-blue-700 px-4 py-1 rounded-md text-center text-white'
                  onClick={() =>
                    window.open(vendorAcocuntDetails?.gstCertificate)
                  }
                >
                  <LuDownload size={20} />
                </button>
              </div>
            </div>
          )}
          {vendorAcocuntDetails?.typesOfSupply && (
            <div className='flex w-full items-center gap-5'>
              <h1 className='flex-[0.3] text-xl text-black font-semibold'>
                Type of Supply -
              </h1>
              <h2 className='text-xl flex-1 text-gray-600 '>
                {vendorAcocuntDetails?.typesOfSupply}
              </h2>
            </div>
          )}
          {vendorAcocuntDetails?.buisnessAddress && (
            <div className='flex w-full items-center gap-5'>
              <h1 className='flex-[0.3] text-xl text-black font-semibold'>
                Business Address -
              </h1>
              <h2 className='text-xl flex-1 text-gray-600 '>
                {vendorAcocuntDetails?.buisnessAddress}
              </h2>
            </div>
          )}
        </div>
      ) : (
        <div className='grid gap-6 mb-6 md:grid-cols-4'>
          <div className='relative z-0 w-full mb-5 group col-span-3'>
            <input
              value={panNumber}
              type='text'
              name='panNumber'
              id='panNumber'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              disabled
              placeholder=''
              onChange={(e) => dispatch(setPanNumber(e.target.value))}
            />
            <label
              htmlFor='panNumber'
              className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              PAN Number *
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group col-span-2 flex items-center gap-5'>
            <p className='font-medium flex-1'>Attach PAN Document *</p>
            <div>
              <input
                type='file'
                onChange={(e) => dispatch(setPanDocument(e.target.files![0]))}
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
          <div className='relative z-0 w-full mb-5 group col-span-3'>
            <label
              htmlFor='gstClassification'
              className='block mb-2 font-medium text-gray-900'
            >
              GST Classification*
            </label>
            <select
              value={gstClassification}
              onChange={(e) => dispatch(setGstClassification(e.target.value))}
              id='gstClassification'
              className='block px-4 py-3 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-auto focus:outline-none focus:ring-0 focus:border-gray-200 peer'
            >
              {GstClassificationData.map((option) => (
                <option
                  key={option.value}
                  className='py-3'
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.title}
                </option>
              ))}
            </select>
          </div>
          {(gstClassification === GstClassificationData[1].value ||
            gstClassification === GstClassificationData[2].value) && (
            <div className='relative z-0 w-full mb-5 group col-span-2'>
              <input
                value={gstNumber}
                type='text'
                name='gstNumber'
                id='gstNumber'
                className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=''
                onChange={(e) => dispatch(setGstNumber(e.target.value))}
              />
              <label
                htmlFor='gstNumber'
                className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                GST Number*
              </label>
            </div>
          )}
          {(gstClassification === GstClassificationData[1].value ||
            gstClassification === GstClassificationData[2].value) && (
            <div className='relative z-0 w-full mb-5 group col-span-2 flex items-center gap-5'>
              <p className='font-medium flex-1'>Attach GST Certificate*</p>
              <div>
                <input
                  onChange={(e) =>
                    dispatch(setGstCertificate(e.target.files![0]))
                  }
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
          )}
          {(gstClassification === GstClassificationData[1].value ||
            gstClassification === GstClassificationData[2].value) && (
            <div className='relative z-0 w-full mb-5 group col-span-2'>
              <label
                htmlFor='typesOfSupply'
                className='block mb-2 font-medium text-gray-900'
              >
                Type of Supply*
              </label>
              <select
                value={typesOfSupply}
                onChange={(e) => dispatch(setTypesOfSupply(e.target.value))}
                id='typesOfSupply'
                className='block px-4 py-3 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-auto focus:outline-none focus:ring-0 focus:border-gray-200 peer'
              >
                {TypesOfSupplyData.map((option) => (
                  <option
                    key={option.value}
                    className='py-3'
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.title}
                  </option>
                ))}
              </select>
            </div>
          )}
          {(gstClassification === GstClassificationData[1].value ||
            gstClassification === GstClassificationData[2].value) && (
            <div className='relative z-0 w-full mb-5 group col-span-2'>
              <label
                htmlFor='businessAddress'
                className='block mb-2 font-medium text-gray-900'
              >
                Select Business Address
              </label>
              <select
                value={buisnessAddress}
                onChange={(e) => dispatch(setBuisnessAddress(e.target.value))}
                id='businessAddress'
                className='block px-4 py-3 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-auto focus:outline-none focus:ring-0 focus:border-gray-200 peer'
              >
                {BusinessAddressData.map((option) => (
                  <option
                    key={option.value}
                    className='py-3'
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaxInfo;
