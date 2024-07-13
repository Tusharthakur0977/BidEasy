import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface LicenseInfoState {
  authorisedDist: any;
  drugLicense: any;
  additionalLicenses: any;
}

// Define the initial state using that type
const initialState: LicenseInfoState = {
  authorisedDist: null,
  drugLicense: null,
  additionalLicenses: null,
};

export const LicenseInfoSlice = createSlice({
  name: 'LicenseInfo',
  initialState,
  reducers: {
    setAuthorisedDist: (state, action: PayloadAction<File>) => {
      state.authorisedDist = action.payload;
    },
    setDrugLicense: (state, action: PayloadAction<File>) => {
      state.drugLicense = action.payload;
    },
    setAdditionalLicenses: (state, action: PayloadAction<File>) => {
      state.additionalLicenses = action.payload;
    },
    setAllLicenseInfo: (state, action: PayloadAction<LicenseInfoState>) => {
      const { authorisedDist, drugLicense, additionalLicenses } =
        action.payload;
      state.authorisedDist = authorisedDist;
      state.drugLicense = drugLicense;
      state.additionalLicenses = additionalLicenses;
    },
  },
});

export const {
  setAuthorisedDist,
  setDrugLicense,
  setAdditionalLicenses,
  setAllLicenseInfo,
} = LicenseInfoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getLicenseInfo = (state: RootState) => state.LicenseInfo;

export default LicenseInfoSlice.reducer;
