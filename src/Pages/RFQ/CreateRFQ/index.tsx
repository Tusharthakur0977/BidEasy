import { useMemo } from 'react';
import { FcCollaboration, FcInvite } from 'react-icons/fc';
import {
  MdOutlineEventAvailable,
  MdOutlineProductionQuantityLimits,
} from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import ProductDetails from './components/ProductDetails';

const TOTALSTEPS = 5;
const ICON_SIZE = 25;

const STEPSDATA = [
  {
    title: 'Product',
    icon: (color: string) => (
      <MdOutlineProductionQuantityLimits
        size={ICON_SIZE}
        color={color}
      />
    ),
  },
  {
    title: 'Supplier',
    icon: (color: string) => (
      <MdOutlineProductionQuantityLimits
        size={ICON_SIZE}
        color={color}
      />
    ),
  },
  {
    title: 'Collaborators',
    icon: (color: string) => (
      <FcCollaboration
        size={ICON_SIZE}
        color={color}
      />
    ),
  },
  {
    title: 'Event Scheduling',
    icon: (color: string) => (
      <MdOutlineEventAvailable
        size={ICON_SIZE}
        color={color}
      />
    ),
  },
  {
    title: 'Start Event',
    icon: (color: string) => (
      <FcInvite
        size={ICON_SIZE}
        color={color}
      />
    ),
  },
];

const CreateRFQ = () => {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector((state) => state.rfqProcessSlice);

  const mainStep = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <ProductDetails />;
      // Add more cases for other steps if needed
      default:
        return null; // Return null or a default component if the currentStep doesn't match any case
    }
  }, [currentStep]);

  const sideStepper = useMemo(() => {
    return (
      <div className='flex flex-col items-center gap-10'>
        {STEPSDATA.map((step, index) => {
          const isSelectedStep = currentStep === index + 1;
          const iconColor = isSelectedStep ? 'white' : 'blue';
          return (
            <div
              className={`flex flex-col items-center px-8 py-3 ${
                isSelectedStep && 'bg-blue-700 rounded-md shadow-md'
              }`}
            >
              {step.icon(iconColor)}
              <p
                className={`font-medium ${
                  isSelectedStep ? 'text-white' : 'text-black'
                } text-black`}
              >
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    );
  }, [currentStep]);

  return (
    <div className='flex gap-5 w-full min-h-full'>
      {sideStepper}
      <div className='flex w-[1px] bg-blue-700' />
      {mainStep}
    </div>
  );
};

export default CreateRFQ;
