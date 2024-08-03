import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { VendorInList } from '../../typings/RFQTypes';

interface RfqSelectedState{
    isRowSelected:boolean
    selectedVendor:string[]
}

const initialState: RfqSelectedState = {
    isRowSelected: false,
    selectedVendor: [],
}

export const RfqSelectedSlice = createSlice({
    name:'rfqSelectedSlice',
    initialState,
    reducers
    : {
        selectVendor: (state, action:PayloadAction<string>) => {
             state.selectedVendor.push(action.payload);
            state.isRowSelected = true;
          },
          deselectVendor: (state,action:PayloadAction<string>) => {
            state.selectedVendor = state.selectedVendor.filter(vendor => vendor !== action.payload);
            state.isRowSelected = state.selectedVendor.length > 0;
          },      
    },
});

export const {selectVendor,deselectVendor} = RfqSelectedSlice.actions;

export const isSelected = (state:RootState) => state.rfqSelectedSlice.isRowSelected;

export const getSelectedDataIds = (state:RootState) => state.rfqSelectedSlice.selectedVendor;

export default RfqSelectedSlice.reducer