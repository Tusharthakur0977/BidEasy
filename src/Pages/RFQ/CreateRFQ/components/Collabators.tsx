import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import TopTabs from "../../../../Components/TopTabs";
import { setRfqCurrentStep } from "../../../../redux/BuyerSlices/rfqProcessSlice";

const TopTabsData = ['Collabarative Users', 'Assign Additional Buyer', 'Transfer Buyer']

const Collaborators = () => {

    const dispatch = useAppDispatch();
    const { currentStep } = useAppSelector((state) => state.rfqProcessSlice)
    const [currentTabStep, setCurrentTabStep] = useState(0);

    const handleClick = () => {
        dispatch(setRfqCurrentStep(currentStep + 1));
    }

    const handleBackClick = () => {
        dispatch(setRfqCurrentStep(currentStep - 1));
    }
    return (
        <div className=" w-full relative">

            <div><h1 className=" text-3xl font-bold p-4 ">Collaborators List</h1><hr /></div>

            <TopTabs
                TopTabsData={TopTabsData}
                currentStep={currentTabStep}
                setCurrentStep={setCurrentTabStep}

            />

<div className=" absolute bottom-0  w-full flex justify-between px-10 md:px-10 lg:px-20">
                <button className="py-3  px-10  bg-blue-500 text-white rounded-md" onClick={handleBackClick}>Prev</button>
                <button className="py-3 px-10 bg-blue-500 text-white rounded-md" onClick={handleClick} > Save </button>
            </div>
        </div>
    )
}
export default Collaborators