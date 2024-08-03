import { useMemo, useState } from "react";
import { useGetAllVendorListApi } from "../../../../Hooks/API/useRFQApis";
import VendorApprovals from "../../VendorApprovals"
import VendorsTable from "../../VendorApprovals/components/VendorsTable"
import { VendorInList } from "../../../../typings/RFQTypes";
import { useDispatch } from "react-redux";
import { setRfqCurrentStep } from "../../../../redux/BuyerSlices/rfqProcessSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { isSelected } from "../../../../redux/SuppliersSlice/rfqSelectedSlice";

const SuppliersList = () => {

    const dispatch = useAppDispatch();
    const { currentStep } = useAppSelector((state) => state.rfqProcessSlice);
    const isRowSelected = useAppSelector(isSelected);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);


    const { data } = useGetAllVendorListApi(currentPage, limit);

    const handlesave = () => {

        dispatch(setRfqCurrentStep(currentStep + 1));

    }

    const handleBackClick = () => {
        dispatch(setRfqCurrentStep(currentStep - 1));
    }

    const approvedData = useMemo(() => {
        return data?.vendors?.filter(
            (vendor) => vendor?.overAllApprovalStatus === 'APPROVED'
        ) ?? [];
    }, [data?.vendors]);

    return (
        <div className=" py-3 items-center rounded-md flex-1 relative">
            <div><h1 className="text-3xl font-bold">Suppliers List</h1></div>
            <hr />

            <VendorsTable
                currentStep={currentStep}
                data={approvedData ?? []}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                limit={limit}
                setLimit={setLimit}
                isSelectable={true}
            />
           <div className=" absolute bottom-0  w-full flex justify-between px-10 md:px-10 lg:px-20">
                <button className="py-3  px-10  bg-blue-500 text-white rounded-md" onClick={handleBackClick}>Prev</button>
                <button className="py-3 px-10 bg-blue-500 text-white rounded-md" onClick={handlesave} > Save </button>
            </div>

        </div>
    )
}

export default SuppliersList