import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface RfqProcessState {
  currentStep: number;
}

// Define the initial state using that type
const initialState: RfqProcessState = {
  currentStep: 1,
};

export const RfqProcessSlice = createSlice({
  name: 'rfqProcessSlice',
  initialState,
  reducers: {
    setRfqCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setRfqCurrentStep } = RfqProcessSlice.actions;

export const getRfqProcessStep = (state: RootState) =>
  state.rfqProcessSlice.currentStep;

export default RfqProcessSlice.reducer;
