import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IProductDetails {
  productCode: string;
  productName: string;
  productNumber: string;
  AnnualVolumeQty: string;
  UOM: string;
  deliveryDetails: string;
  genericName: string;
}

interface AuctionSliceState {
  currentStep: number;
  auctionId: string | null;
  requirementTitle: string;
  projectName: string;
  clientName: string;
  products: IProductDetails[];
  selectedVendors: string[];
}

// Define the initial state using that type
const initialState: AuctionSliceState = {
  currentStep: 1,
  auctionId: null,
  requirementTitle: '',
  projectName: '',
  clientName: '',
  products: [
    {
      productCode: '',
      productName: '',
      productNumber: '',
      AnnualVolumeQty: '',
      UOM: '',
      deliveryDetails: '',
      genericName: '',
    },
  ],
  selectedVendors: [],
};

export const AuctionSlice = createSlice({
  name: 'auctionSlice',
  initialState,
  reducers: {
    setCurrentAuctioStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setAuctionId: (state, action: PayloadAction<string>) => {
      state.auctionId = action.payload;
    },
    setRequirementTitle: (state, action: PayloadAction<string>) => {
      state.requirementTitle = action.payload;
    },
    setProjectName: (state, action: PayloadAction<string>) => {
      state.projectName = action.payload;
    },
    setClientName: (state, action: PayloadAction<string>) => {
      state.clientName = action.payload;
    },
    setProducts: (state, action: PayloadAction<IProductDetails[]>) => {
      state.products = action.payload;
    },
    setSelectedVendors: (state, action: PayloadAction<string[]>) => {
      state.selectedVendors = action.payload;
    },
  },
});

export const {
  setCurrentAuctioStep,
  setAuctionId,
  setRequirementTitle,
  setProjectName,
  setClientName,
  setProducts,
  setSelectedVendors,
} = AuctionSlice.actions;

export const getCurrentAuctionID = (state: RootState) =>
  state.auctionSlice.auctionId;

export default AuctionSlice.reducer;
