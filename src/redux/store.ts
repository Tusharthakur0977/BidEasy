import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from './userSlices/userSlice';
import additionalInfoSlice from './VendorSlices/additionalInfoSlice';
import bankInfoSlice from './VendorSlices/bankInfoSlice';
import basicCompanyInfoSlice from './VendorSlices/basicCompanyinfoSlice';
import certificatesSlice from './VendorSlices/certificatesSlice';
import LicensesInfoSlice from './VendorSlices/LicensesInfoSlice';
import taxSlice from './VendorSlices/taxSlice';
import VendorDataSlice from './VendorSlices/VendorDataSlice';
import profileSLice from './VendorSlices/profileSLice';
import modalSlice from './modalSlices/modalSlice';
import rfqDataSlice from './BuyerSlices/rfqDataSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    taxInfo: taxSlice,
    basicCompanyInfo: basicCompanyInfoSlice,
    bankInfo: bankInfoSlice,
    certificatesInfo: certificatesSlice,
    LicenseInfo: LicensesInfoSlice,
    additionalInfo: additionalInfoSlice,
    vendorDataSlice: VendorDataSlice,
    profileSlice: profileSLice,
    modalSlice: modalSlice,
    rfqDataSlice: rfqDataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
