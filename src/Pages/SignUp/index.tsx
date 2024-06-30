import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { IoArrowBackCircle } from 'react-icons/io5';
import COLORS from '../../Assets/colors';
import ICONS from '../../Assets/icons';
import SVGIcon from '../../Components/SVGIcon';
import { useVendorSignUpApi } from '../../Hooks/API/useVendorApis';
import {
  isStrongPassword,
  isValidEmail,
  isValidPAN,
} from '../../Utils/Helpers';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const vendorSignUpAPI = useVendorSignUpApi();

  const [currentStep, setCurrentStep] = useState(1);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [pan, setPan] = useState('');
  const [reEnterPan, setReEnterPan] = useState('');

  const renderFormTitle = () => {
    if (currentStep === 1) {
      return 'Basic Information';
    } else if (currentStep === 2) {
      return 'PAN Details';
    } else if (currentStep === 3) {
      return (
        <>
          <strong>{firstName},</strong> set up your Password'
        </>
      );
    }
  };

  const renderForms = useMemo(() => {
    const renderBasicInformation = () => {
      return (
        <div className='mx-auto w-full'>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                name='first_name'
                id='first_name'
                className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='first_name'
                className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                First name
              </label>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                name='last_name'
                id='last_name'
                className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='last_name'
                className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Last name
              </label>
            </div>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              type='company_name'
              name='company_name'
              id='company_name'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              required
            />
            <label
              htmlFor='company_name'
              className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Company Name
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              name='email'
              id='email'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              required
            />
            <label
              htmlFor='email'
              className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Email address
            </label>
          </div>
        </div>
      );
    };

    const renderPanDetails = () => {
      return (
        <div className='mx-auto w-full'>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              type='text'
              name='enter_pan'
              id='enter_pan'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              required
            />
            <label
              htmlFor='enter_pan'
              className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter PAN
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={reEnterPan}
              onChange={(e) => setReEnterPan(e.target.value)}
              type='text'
              name='re-enter_pan'
              id='re-enter_pan'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              required
            />
            <label
              htmlFor='re-enter_pan'
              className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Re-enter PAN
            </label>
          </div>
        </div>
      );
    };

    const renderSetPassword = () => {
      return (
        <div className='mx-auto w-full'>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='text'
              name='enter_pan'
              id='enter_pan'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              required
            />
            <label
              htmlFor='enter_pan'
              className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Enter Password
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type='text'
              name='re-enter_pan'
              id='re-enter_pan'
              className='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=''
              required
            />
            <label
              htmlFor='re-enter_pan'
              className='peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Confirm Password
            </label>
          </div>
        </div>
      );
    };

    if (currentStep === 1) {
      return renderBasicInformation();
    }
    if (currentStep === 2) {
      return renderPanDetails();
    }
    if (currentStep === 3) {
      return renderSetPassword();
    }
  }, [
    companyName,
    confirmPassword,
    currentStep,
    email,
    firstName,
    lastName,
    pan,
    password,
    reEnterPan,
  ]);

  const onSignUp = () => {
    vendorSignUpAPI
      .mutateAsync({
        firstName,
        lastName,
        companyName,
        email,
        PAN: pan,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(
            'You are registered successfully. Please Login using email and password.'
          );
          navigate('/auth/signin');
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          toast.error(err.response.data.message);
        } else {
          toast.error('Something went wrong. Please try again later.');
        }
      });
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (
        !firstName.trim() ||
        !lastName.trim() ||
        !companyName.trim() ||
        !isValidEmail(email)
      ) {
        toast.error('Please fill in all fields correctly.');
        return;
      }
    } else if (currentStep === 2) {
      if (!pan || !isValidPAN(pan) || pan !== reEnterPan) {
        toast.error('PAN does not match or is missing.');
        return;
      }
    } else if (currentStep === 3) {
      if (!isStrongPassword(password) || password !== confirmPassword) {
        toast.error('Passwords do not match or not strong enough.');
        return;
      }
      onSignUp();
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className='p-16 flex flex-col gap-10'>
      <p className='text-2xl font-medium'>{renderFormTitle()}</p>
      {renderForms}
      <div className='flex items-center justify-between'>
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            type='submit'
            className='my-8 mr-4'
          >
            <IoArrowBackCircle
              color={COLORS.primary}
              size={50}
            />
          </button>
        )}
        <button
          onClick={handleNext}
          type='submit'
          className='my-8 text-white bg-blue-700 font-medium focus:ring-4 focus:outline-none focus:ring-white rounded-lg text-md w-full px-5 py-3 text-center'
        >
          NEXT
        </button>
      </div>

      <div className='flex gap-2 items-center'>
        <SVGIcon
          Icon={ICONS.INFO_ICON}
          fillColor={COLORS.primary}
          width='20px'
          height='20px'
        />
        <p className='text-base text-gray-500 font-light'>
          Company name should be same asper your government records
        </p>
      </div>
    </div>
  );
};

export default SignUp;
