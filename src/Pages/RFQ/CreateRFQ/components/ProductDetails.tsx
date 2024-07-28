import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { GstClassificationData } from '../../../../seeds/CompanyInfoData';

interface IProductDetails {
  productCode: string;
  productName: string;
  productNumber: string;
  AnnualVolumeQty: string;
  UOM: string;
  deliveryDetails: string;
  genericName: string;
}

const InitalProductState = {
  productCode: '',
  productName: '',
  productNumber: '',
  AnnualVolumeQty: '',
  UOM: '',
  deliveryDetails: '',
  genericName: '',
};

const ProductDetails = () => {
  const [requirementTitle, setRequirementTitle] = useState('');
  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');

  const [products, setProducts] = useState<IProductDetails[]>([
    InitalProductState,
  ]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const newProducts = [...products];
    newProducts[index] = {
      ...newProducts[index],
      [name]: value,
    };
    setProducts(newProducts);
  };

  const addProductRow = () => {
    setProducts([...products, InitalProductState]);
  };

  const removeProduct = (index: number) => {
    if (products.length > 1)
      setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className='flex flex-col items-center gap-10 flex-1 px-5 py-3 shadow-lg rounded-md'>
      <p className='font-medium text-xl'>Product Requirement Specification</p>

      <div className='flex flex-col gap-10 w-full max-h-[650px] py-4 scrollable-div px-5'>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={requirementTitle}
              onChange={(e) => setRequirementTitle(e.target.value)}
              type='text'
              name='requirementTitle'
              id='requirementTitle'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
            />
            <label
              htmlFor='requirementTitle'
              className='peer-focus:font-bold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Requirement Title
            </label>
          </div>

          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              type='text'
              name='projectName'
              id='projectName'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
            />
            <label
              htmlFor='projectName'
              className='peer-focus:font-bold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Project Name
            </label>
          </div>

          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              type='text'
              name='clientName'
              id='clientName'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
            />
            <label
              htmlFor='clientName'
              className='peer-focus:font-bold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Client Name
            </label>
          </div>
        </div>

        <div className='flex justify-between w-full items-center border-black border-b-2 py-2'>
          <p className='text-xl font-bold'>Product Details</p>
          <button
            onClick={addProductRow}
            className='py-2 px-4 bg-blue-500 text-white rounded-md'
          >
            Add Product
          </button>
        </div>
        <div className='flex flex-col gap-10'>
          {products.map((product, index) => (
            <div className='flex gap-5 items-start'>
              <p className='font-bold'>{index + 1}.</p>
              <div
                key={index}
                className='grid gap-6 mb-6 md:grid-cols-4 items-end p-2 w-full'
              >
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={product.productCode}
                    onChange={(event) => handleInputChange(index, event)}
                    type='number'
                    name='productCode'
                    id='productCode'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=''
                  />
                  <label
                    htmlFor='productCode'
                    className='peer-focus:font-bold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Product Code
                  </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={product.productName}
                    onChange={(event) => handleInputChange(index, event)}
                    type='text'
                    name='productName'
                    id='productName'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=''
                  />
                  <label
                    htmlFor='productName'
                    className='peer-focus:font-bold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Product Name
                  </label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={product.productNumber}
                    onChange={(event) => handleInputChange(index, event)}
                    type='number'
                    name='productNumber'
                    id='productNumber'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=''
                  />
                  <label
                    htmlFor='productNumber'
                    className='peer-focus:font-bold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Product Number
                  </label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={product.AnnualVolumeQty}
                    onChange={(event) => handleInputChange(index, event)}
                    type='number'
                    name='AnnualVolumeQty'
                    id='AnnualVolumeQty'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=''
                  />
                  <label
                    htmlFor='AnnualVolumeQty'
                    className='peer-focus:font-bold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Annual Volume Quantity
                  </label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <label
                    htmlFor='UOM'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    UOM
                  </label>
                  <select
                    value={product.UOM}
                    onChange={(event) => handleInputChange(index, event)}
                    id='UOM'
                    className='block px-4 py-3 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-auto focus:outline-none focus:ring-0 focus:border-gray-200 peer'
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
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={product.deliveryDetails}
                    onChange={(event) => handleInputChange(index, event)}
                    type='number'
                    name='deliveryDetails'
                    id='deliveryDetails'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=''
                  />
                  <label
                    htmlFor='deliveryDetails'
                    className='peer-focus:font-bold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Product Delivery Details
                  </label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    value={product.genericName}
                    onChange={(event) => handleInputChange(index, event)}
                    type='number'
                    name='genericName'
                    id='genericName'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=''
                  />
                  <label
                    htmlFor='genericName'
                    className='peer-focus:font-bold absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Generic Name
                  </label>
                </div>
              </div>
              {index > 0 && (
                <button
                  onClick={() => removeProduct(index)}
                  className='flex flex-col items-center self-center mt-4 py-2 px-4 text-white rounded-md'
                >
                  <MdDelete color='crimson' />
                  <p className='font-medium text-red-400'>Delete</p>
                </button>
              )}
            </div>
          ))}
          <div className='flex justify-end'>
            <button
              onClick={() => {}}
              className='py-2 px-10  bg-blue-500 text-white rounded-md'
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
