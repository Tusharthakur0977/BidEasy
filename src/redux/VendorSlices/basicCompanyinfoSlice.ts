import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface BasicCompanyInfoState {
  legalBusinessName: string;
  companyAddress: string;
  city: string;
  state: string;
  pinCode: string;
  contactPersonName: string;
  contactPersonEmail: string;
  contactPersonNumber: string;
  accountDeptEmail: string;
  salesDeptEmail: string;
}

// Define the initial state using that type
const initialState: BasicCompanyInfoState = {
  legalBusinessName: '',
  companyAddress: '',
  city: '',
  state: '',
  pinCode: '',
  contactPersonName: '',
  contactPersonEmail: '',
  contactPersonNumber: '',
  accountDeptEmail: '',
  salesDeptEmail: '',
};

export const basicCompanyInfoSlice = createSlice({
  name: 'basicCompanyInfo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLegalBusinessName: (state, action: PayloadAction<string>) => {
      state.legalBusinessName = action.payload;
    },
    setCompanyAddress: (state, action: PayloadAction<string>) => {
      state.companyAddress = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setState: (state, action: PayloadAction<string>) => {
      state.state = action.payload;
    },
    setPinCode: (state, action: PayloadAction<string>) => {
      state.pinCode = action.payload;
    },
    setContactPersonName: (state, action: PayloadAction<string>) => {
      state.contactPersonName = action.payload;
    },
    setContactPersonEmail: (state, action: PayloadAction<string>) => {
      state.contactPersonEmail = action.payload;
    },
    setContactPersonNumber: (state, action: PayloadAction<string>) => {
      state.contactPersonNumber = action.payload;
    },
    setAccountDeptEmail: (state, action: PayloadAction<string>) => {
      state.accountDeptEmail = action.payload;
    },
    setSalesDeptEmail: (state, action: PayloadAction<string>) => {
      state.salesDeptEmail = action.payload;
    },
    setAllBasicInfo: (states, action: PayloadAction<BasicCompanyInfoState>) => {
      const {
        legalBusinessName,
        companyAddress,
        city,
        state,
        pinCode,
        contactPersonName,
        contactPersonEmail,
        contactPersonNumber,
        accountDeptEmail,
        salesDeptEmail,
      } = action.payload;
      states.legalBusinessName = legalBusinessName;
      states.companyAddress = companyAddress;
      states.city = city;
      states.state = state;
      states.pinCode = pinCode;
      states.legalBusinessName = legalBusinessName;
      states.contactPersonName = contactPersonName;
      states.contactPersonEmail = contactPersonEmail;
      states.contactPersonNumber = contactPersonNumber;
      states.accountDeptEmail = accountDeptEmail;
      states.salesDeptEmail = salesDeptEmail;
    },
  },
});

export const {
  setLegalBusinessName,
  setCompanyAddress,
  setCity,
  setState,
  setPinCode,
  setContactPersonName,
  setContactPersonEmail,
  setContactPersonNumber,
  setAccountDeptEmail,
  setSalesDeptEmail,
  setAllBasicInfo,
} = basicCompanyInfoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getBasicCompanyInfo = (state: RootState) => state.basicCompanyInfo;

export default basicCompanyInfoSlice.reducer;
