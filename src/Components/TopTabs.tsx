import { Dispatch, FC, SetStateAction } from 'react';

type TopTabsProps = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  TopTabsData: any[];
  fullBar?: boolean;
};

const TopTabs: FC<TopTabsProps> = ({
  currentStep,
  setCurrentStep,
  TopTabsData,
  fullBar = false,
}) => {
  return (
    <ul
      className={`flex ${
        fullBar && 'justify-between'
      } flex-wrap -mb-px text-sm text-center gap-5`}
    >
      {TopTabsData.map((tab, index) => (
        <li
          key={tab + index.toString()}
          onClick={() => setCurrentStep(index)}
          className={`me-2 ${fullBar && 'flex-[0.33]'}`}
        >
          <button
            className={`inline-flex ${
              fullBar && 'w-full'
            } items-center justify-center ${
              currentStep === index
                ? 'text-blue-600 hover:text-blue-600 hover:border-blue-600 border-blue-600'
                : 'text-gray-400 hover:text-black hover:border-black'
            } p-4 border-b-2 rounded-t-lg group text-lg font-bold`}
            type='button'
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TopTabs;
