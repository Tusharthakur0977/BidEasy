import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getLocalItem } from '../../Utils/Helpers';
import LOCAL_STORAGE_KEYS from '../../Utils/LocalKeys';

// Define a type for the slice state
interface UserState {
  isAuthenticated: boolean;
  userType: 'VENDOR' | 'BUYER';
}

// Define the initial state using that type
const initialState: UserState = {
  isAuthenticated: getLocalItem(LOCAL_STORAGE_KEYS.IS_AUTHENTICATED) || false,
  userType: getLocalItem(LOCAL_STORAGE_KEYS.USER_TYPE),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUserType: (state, action: PayloadAction<'VENDOR' | 'BUYER'>) => {
      state.userType = action.payload;
    },
  },
});

export const { setIsAuthenticated, setUserType } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUserInfo = (state: RootState) => state.user;

export default userSlice.reducer;
