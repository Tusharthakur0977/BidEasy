import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface BankInfoState {
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  ifscCode: string;
  bankBranch: string;
  chequePhoto: any;
}

// Define the initial state using that type
const initialState: BankInfoState = {
  bankName: '',
  accountHolder: '',
  accountNumber: '',
  ifscCode: '',
  bankBranch: '',
  chequePhoto: null,
};

export const bankInfoSlice = createSlice({
  name: 'bankInfo',
  initialState,
  reducers: {
    setBankName: (state, action: PayloadAction<string>) => {
      state.bankName = action.payload;
    },
    setAccountHolder: (state, action: PayloadAction<string>) => {
      state.accountHolder = action.payload;
    },
    setAccountNumber: (state, action: PayloadAction<string>) => {
      state.accountNumber = action.payload;
    },
    setIfscCode: (state, action: PayloadAction<string>) => {
      state.ifscCode = action.payload;
    },
    setBankBranch: (state, action: PayloadAction<string>) => {
      state.bankBranch = action.payload;
    },
    setChequePhoto: (state, action: PayloadAction<File>) => {
      state.chequePhoto = action.payload;
    },
    setAllBankInfo: (states, action: PayloadAction<BankInfoState>) => {
      const {
        bankName,
        accountHolder,
        accountNumber,
        ifscCode,
        bankBranch,
        chequePhoto,
      } = action.payload;
      states.bankName = bankName;
      states.accountHolder = accountHolder;
      states.bankBranch = bankBranch;
      states.accountNumber = accountNumber;
      states.ifscCode = ifscCode;
      states.chequePhoto = chequePhoto;
    },
  },
});

export const {
  setBankName,
  setAccountHolder,
  setAccountNumber,
  setIfscCode,
  setBankBranch,
  setChequePhoto,
  setAllBankInfo,
} = bankInfoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getBankInfo = (state: RootState) => state.bankInfo;

export default bankInfoSlice.reducer;
