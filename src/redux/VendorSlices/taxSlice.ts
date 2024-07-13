import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface TaxSectionState {
  panNumber: string;
  gstClassification: string;
  gstNumber: string;
  typesOfSupply: string;
  buisnessAddress: string;
  panDocument: null | File;
  gstCertificate: null | File;
}

// Define the initial state using that type
const initialState: TaxSectionState = {
  panNumber: '',
  gstClassification: '',
  gstNumber: '',
  typesOfSupply: '',
  buisnessAddress: '',
  panDocument: null,
  gstCertificate: null,
};

export const taxSlice = createSlice({
  name: 'taxInfo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPanNumber: (state, action: PayloadAction<string>) => {
      state.panNumber = action.payload;
    },
    setGstClassification: (state, action: PayloadAction<string>) => {
      state.gstClassification = action.payload;
    },
    setGstNumber: (state, action: PayloadAction<string>) => {
      state.gstNumber = action.payload;
    },
    setTypesOfSupply: (state, action: PayloadAction<string>) => {
      state.typesOfSupply = action.payload;
    },
    setBuisnessAddress: (state, action: PayloadAction<string>) => {
      state.buisnessAddress = action.payload;
    },
    setPanDocument: (state, action: PayloadAction<File>) => {
      state.panDocument = action.payload;
    },
    setGstCertificate: (state, action: PayloadAction<File>) => {
      state.gstCertificate = action.payload;
    },
    setAllTaxInfo: (state, action: PayloadAction<TaxSectionState>) => {
      const {
        panNumber,
        gstClassification,
        gstNumber,
        typesOfSupply,
        buisnessAddress,
        panDocument,
        gstCertificate,
      } = action.payload;
      state.panNumber = panNumber;
      state.gstClassification = gstClassification;
      state.gstNumber = gstNumber;
      state.typesOfSupply = typesOfSupply;
      state.buisnessAddress = buisnessAddress;
      state.panDocument = panDocument;
      state.gstCertificate = gstCertificate;
    },
  },
});

export const {
  setPanNumber,
  setGstClassification,
  setGstNumber,
  setTypesOfSupply,
  setBuisnessAddress,
  setPanDocument,
  setGstCertificate,
  setAllTaxInfo,
} = taxSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTaxInfoDetails = (state: RootState) => state.taxInfo;

export default taxSlice.reducer;
