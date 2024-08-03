import { setRfqCurrentStep } from "../../../../redux/BuyerSlices/rfqProcessSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store"

const EventSchedule = () => {
    const dispatch = useAppDispatch();
    const {currentStep} = useAppSelector((state)=> state.rfqProcessSlice);
    const handleClick = () =>{
        dispatch(setRfqCurrentStep(currentStep+1));
    }

    const handleBackClick = ()=>{
        dispatch(setRfqCurrentStep(currentStep-1));
    }
    return (
        <div className="flex-grow-0 ml-10 text-sm w-full font-medium leading-6 text-gray-900 shadow-xl">
            <h1 className="font-bold text-3xl mt-12 ml-10">Event Schedule</h1>
            <div className="flex py-9 px-20 ">
                <label htmlFor="timezone" className="flex-grow ml-5 pt-2 w-10 font-semibold text-xl text-gray-700 text-nowrap  mb-2">Time Zone : </label>
                <select id="timezone" name="timezone" className="flex-grow-0 w-full p-4 ml-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ">
                    <option value="Pacific/Midway">(GMT-11:00) Midway Island, Samoa</option>
                    <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
                    <option value="America/Anchorage">(GMT-09:00) Alaska</option>
                    <option value="America/Los_Angeles">(GMT-08:00) Pacific Time (US & Canada)</option>
                    <option value="America/Tijuana">(GMT-08:00) Tijuana, Baja California</option>
                    <option value="America/Denver">(GMT-07:00) Mountain Time (US & Canada)</option>
                    <option value="America/Chihuahua">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                    <option value="America/Phoenix">(GMT-07:00) Arizona</option>
                    <option value="America/Chicago">(GMT-06:00) Central Time (US & Canada)</option>
                    <option value="America/Regina">(GMT-06:00) Saskatchewan</option>

                </select>
            </div>
            <div className="flex py-2 px-20   ">
                <label htmlFor="timezone" className="flex-grow  pt-2 ml-4 w-10 font-semibold text-xl text-gray-700 text-nowrap ">Event Date : </label>
                <input
                    type="date"
                    className="flex-grow-0 py-4 px-2 w-full ml-20 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the Date "
                />
            </div>
            <div className="flex py-6 px-20 ">
                <label htmlFor="timezone" className="flex-grow  pt-2 ml-4 w-10 font-semibold text-xl text-gray-700 text-nowrap ">Event Time : </label>
                <input
                    type="time"
                    className="flex-grow-0 py-4 w-full ml-20 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500  px-2"
                    placeholder="Enter Time"
                />
            </div>
            <div className=" flex py-4 px-96 ml-56">
                <button className="flex  right-0  mb-4 mr-4 py-3 px-10 bg-blue-500 text-white rounded-md" onClick={handleBackClick}>Prev</button>

                <button className="flex right-0  mb-5 mr-24  py-3 px-10  bg-blue-500 text-white rounded-md" onClick={handleClick}>Save</button>

            </div>
            
        </div>
    )

}
export default EventSchedule