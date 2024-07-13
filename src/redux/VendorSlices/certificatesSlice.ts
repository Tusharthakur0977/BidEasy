import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface CertificationInfoState {
  msmeType: string;
  msmeNumber: string;
  msmeCertificate: any;
  cinNumber: string;
  companyRegsCertificate: any;
}

// Define the initial state using that type
const initialState: CertificationInfoState = {
  msmeType: '',
  msmeNumber: '',
  msmeCertificate: null,
  cinNumber: '',
  companyRegsCertificate: null,
};

export const certificateSlice = createSlice({
  name: 'certificatesInfo',
  initialState,
  reducers: {
    setMsmeType: (state, action: PayloadAction<string>) => {
      state.msmeType = action.payload;
    },
    setMsmeNumber: (state, action: PayloadAction<string>) => {
      state.msmeNumber = action.payload;
    },
    setMsmeCertificate: (state, action: PayloadAction<File>) => {
      state.msmeCertificate = action.payload;
    },
    setCinNumber: (state, action: PayloadAction<string>) => {
      state.cinNumber = action.payload;
    },
    setCompanyRegsCertificate: (state, action: PayloadAction<File>) => {
      state.companyRegsCertificate = action.payload;
    },
    setAllCertificationInfo: (
      states,
      action: PayloadAction<CertificationInfoState>
    ) => {
      const {
        msmeType,
        msmeNumber,
        msmeCertificate,
        cinNumber,
        companyRegsCertificate,
      } = action.payload;
      states.msmeType = msmeType;
      states.msmeNumber = msmeNumber;
      states.msmeCertificate = msmeCertificate;
      states.cinNumber = cinNumber;
      states.companyRegsCertificate = companyRegsCertificate;
    },
  },
});

export const {
  setMsmeType,
  setMsmeNumber,
  setMsmeCertificate,
  setCinNumber,
  setCompanyRegsCertificate,
  setAllCertificationInfo,
} = certificateSlice.actions;

export const getCertificationsInfo = (state: RootState) =>
  state.certificatesInfo;

export default certificateSlice.reducer;
