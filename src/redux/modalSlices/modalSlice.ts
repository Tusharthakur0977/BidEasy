import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  inviteVendorModal: boolean;
  editProfileModal: boolean;
  vendorRejectionModal: boolean;
}

const initialState: ModalState = {
  inviteVendorModal: false,
  editProfileModal: false,
  vendorRejectionModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setInviteVendorModal(state, action: PayloadAction<boolean>) {
      state.inviteVendorModal = action.payload;
    },
    setEditProfileMOdal(state, action: PayloadAction<boolean>) {
      state.editProfileModal = action.payload;
    },
    setVendorRejectionModal(state, action: PayloadAction<boolean>) {
      state.vendorRejectionModal = action.payload;
    },
  },
});

export const {
  setInviteVendorModal,
  setEditProfileMOdal,
  setVendorRejectionModal,
} = modalSlice.actions;

export default modalSlice.reducer;
