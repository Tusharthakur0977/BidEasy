import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import auctionSlice from './BuyerSlices/auctionSlice';
import rfqDataSlice from './BuyerSlices/rfqDataSlice';
import modalSlice from './modalSlices/modalSlice';
import userSlice from './userSlices/userSlice';
import additionalInfoSlice from './VendorSlices/additionalInfoSlice';
import bankInfoSlice from './VendorSlices/bankInfoSlice';
import basicCompanyInfoSlice from './VendorSlices/basicCompanyinfoSlice';
import certificatesSlice from './VendorSlices/certificatesSlice';
import LicensesInfoSlice from './VendorSlices/LicensesInfoSlice';
import profileSLice from './VendorSlices/profileSLice';
import taxSlice from './VendorSlices/taxSlice';
import VendorDataSlice from './VendorSlices/VendorDataSlice';

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
    auctionSlice: auctionSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
