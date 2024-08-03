import { setCurrentAuctioStep } from '../../../../redux/BuyerSlices/auctionSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';

const StartEvent = () => {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector((state) => state.auctionSlice);
  const handleBackClick = () => {
    dispatch(setCurrentAuctioStep(currentStep - 1));
  };
  return (
    <div>
      <h1>Start Event</h1>

      <div className='fixed  bottom-52  w-full flex-grow justify-between px-10'>
        <button
          className='py-3 px-10 bg-blue-500 text-white rounded-md'
          onClick={handleBackClick}
        >
          Prev
        </button>
      </div>
    </div>
  );
};
export default StartEvent;
