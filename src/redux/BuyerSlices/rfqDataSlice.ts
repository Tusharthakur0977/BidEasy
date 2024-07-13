import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface RfqBasicDetails {
  email: string;
  name: string;
  role: string;
}

interface RfqDataState {
  rfqBasicDetails: RfqBasicDetails;
}

// Define the initial state using that type
const initialState: RfqDataState = {
  rfqBasicDetails: {
    email: '',
    name: '',
    role: '',
  },
};

export const RfqDataSlice = createSlice({
  name: 'rfqDataSlice',
  initialState,
  reducers: {
    setRfqBasicDetails: (state, action: PayloadAction<RfqBasicDetails>) => {
      state.rfqBasicDetails = action.payload;
    },
  },
});

export const { setRfqBasicDetails } = RfqDataSlice.actions;

export const getRfqBasicDetails = (state: RootState) =>
  state.rfqDataSlice.rfqBasicDetails;

export default RfqDataSlice.reducer;
