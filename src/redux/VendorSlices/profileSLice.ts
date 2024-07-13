import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface ProfileSLice {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  panNumber: string;
}

// Define the initial state using that type
const initialState: ProfileSLice = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  panNumber: '',
};

export const certificateSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    setPan: (state, action: PayloadAction<string>) => {
      state.panNumber = action.payload;
    },
    setAllProfile: (states, action: PayloadAction<ProfileSLice>) => {
      const { firstName, lastName, email, companyName, panNumber } =
        action.payload;
      states.firstName = firstName;
      states.lastName = lastName;
      states.email = email;
      states.companyName = companyName;
      states.panNumber = panNumber;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setCompanyName,
  setPan,
  setAllProfile,
} = certificateSlice.actions;

export const getProfileDetails = (state: RootState) => state.profileSlice;

export default certificateSlice.reducer;
