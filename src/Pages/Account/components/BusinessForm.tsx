import { FC, useState } from 'react';
import { MdDelete, MdKeyboardArrowDown } from 'react-icons/md';
import COLORS from '../../../Assets/colors';
import { MdKeyboardArrowUp } from 'react-icons/md';

type BusinessFormProp = {
  id: number;
  removeForm: (id: number) => void;
};

const BusinessForm: FC<BusinessFormProp> = ({ id, removeForm }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [contact, setcontact] = useState([]);

  // Inline styles for transitions
  const contentStyle = {
    maxHeight: isExpanded ? '500px' : '0px', // Adjust max-height based on content
    opacity: isExpanded ? 1 : 0,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
  };

  return (
    <div className='flex flex-col px-5 bg-white py-6 shadow-sm rounded-md transition-all duration-300'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <p className='font-bold text-lg'>Business Location {id}</p>
          <button onClick={() => removeForm(id)}>
            <MdDelete
              color={COLORS.primary}
              size={20}
            />
          </button>
        </div>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <MdKeyboardArrowUp size={30} />
          ) : (
            <MdKeyboardArrowDown size={30} />
          )}
        </button>
      </div>
      <div
        style={contentStyle}
        className={`${isExpanded ? 'my-5' : 'my-0'} flex flex-col gap-10`}
      >
        <div className='flex flex-col gap-3'>
          <p className='font-medium text-lg'>GST Information</p>
          <div className='flex items-center gap-10'>
            <div className='relative z-0 w-full group flex-[0.5]'>
              <input
                type='text'
                name='gst_id'
                id='gst_id'
                className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=''
              />
              <label
                htmlFor='gst_id'
                className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                GST ID
              </label>
            </div>
            <button
              type='submit'
              className='text-white self-end bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto self-start px-10 py-2.5 text-center'
            >
              Validate
            </button>
          </div>
          <div className='flex gap-20 my-5 items-center'>
            <p className='flex-[0.25]'>Upload GST Document</p>
            <div>
              <input
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

        <div className='flex flex-col gap-3'>
          <p className='font-medium text-lg'>Location Information</p>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex justify-between items-center'>
            <p className='font-medium text-lg'>Contact</p>
            <button
              type='submit'
              className='text-blue-500 bg-white border-blue-600 border-2 focus:outline-none  font-medium rounded-lg w-full sm:w-auto self-start px-10 py-2.5 text-center'
            >
              Add Contacts
            </button>
          </div>
          {contact.length > 0 ? (
            contact.map((item) => {
              return <></>;
            })
          ) : (
            <p className=''>
              No contacts added yet. Start adding contacts by clicking Add
              Contact button.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessForm;
