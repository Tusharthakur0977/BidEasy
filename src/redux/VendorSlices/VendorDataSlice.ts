import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface VendorBasicDetails {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  PAN: string;
  registrationToken: string;
  isRegistered: boolean;
  isDetailsRegistered: boolean;
  vendorCode: string;
  overAllapprovalStatus: string;
  userType: string;
  updatedAt: string;
  createdAt: string;
}

interface VendorAccountDetails {
  gstClassification: string;
  typesOfSupply: string;
  buisnessAddress: string;
  gstNumber: string;
  panDocument: string;
  gstCertificate: string;
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
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  ifscCode: string;
  bankBranch: string;
  chequePhoto: string;
  msmeType: string;
  msmeNumber: string;
  msmeCertificate: string;
  cinNumber: string;
  companyRegsCertificate: string;
  authorisedDist: string;
  drugLicense: string;
  additionalLicenses: string;
  additionalNotes: string;
  additionalAttachement: string;
  updatedAt: string;
  createdAt: string;
}

interface VendorApprovalDetails {
  overAllapprovalStatus: string;
  approvals: Approval[];
}

interface Approval {
  approvedById: string;
  status: string;
  roleRequired: string;
  rejectionReason?: any;
  createdAt: string;
  updatedAt: string;
}

// Define a type for the slice state
interface VendorDataState {
  vendorBasicDetails: VendorBasicDetails;
  vendorAccountDetails: VendorAccountDetails | null;
  vendorApprovalDetails: VendorApprovalDetails | null;
}

// Define the initial state using that type
const initialState: VendorDataState = {
  vendorBasicDetails: {
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    PAN: '',
    registrationToken: '',
    isRegistered: false,
    isDetailsRegistered: false,
    overAllapprovalStatus: 'PENDING',
    vendorCode: '',
    userType: '',
    createdAt: '',
    updatedAt: '',
  },
  vendorAccountDetails: null,
  vendorApprovalDetails: null,
};

export const VendorDataSlice = createSlice({
  name: 'vendorDataSlice',
  initialState,
  reducers: {
    setVendorBasicDetails: (
      state,
      action: PayloadAction<VendorBasicDetails>
    ) => {
      state.vendorBasicDetails = action.payload;
    },
    setVendorAccountDetails: (
      state,
      action: PayloadAction<VendorAccountDetails | null>
    ) => {
      state.vendorAccountDetails = action.payload;
    },
    setVendorApprovalDetails: (
      state,
      action: PayloadAction<VendorApprovalDetails | null>
    ) => {
      state.vendorApprovalDetails = action.payload;
    },
  },
});

export const {
  setVendorAccountDetails,
  setVendorBasicDetails,
  setVendorApprovalDetails,
} = VendorDataSlice.actions;

export const getVendorBasicDetails = (state: RootState) =>
  state.vendorDataSlice.vendorBasicDetails;
export const getVendorAccountDetails = (state: RootState) =>
  state.vendorDataSlice.vendorAccountDetails;
export const getVendorApprovalDetails = (state: RootState) =>
  state.vendorDataSlice.vendorApprovalDetails;

export default VendorDataSlice.reducer;
