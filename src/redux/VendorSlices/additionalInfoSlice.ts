import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface AdditionalInfoState {
  additionalNotes: string;
  additionalAttachment: any;
}

// Define the initial state using that type
const initialState: AdditionalInfoState = {
  additionalNotes: '',
  additionalAttachment: '',
};

export const AdditionalInfoSlice = createSlice({
  name: 'additionalInfo',
  initialState,
  reducers: {
    setAdditionalNotes: (state, action: PayloadAction<string>) => {
      state.additionalNotes = action.payload;
    },
    setadditionalAttachement: (state, action: PayloadAction<File>) => {
      state.additionalAttachment = action.payload;
    },
    setAllAdditionalInfo: (
      states,
      action: PayloadAction<AdditionalInfoState>
    ) => {
      const { additionalNotes, additionalAttachment } = action.payload;
      states.additionalNotes = additionalNotes;
      states.additionalAttachment = additionalAttachment;
    },
  },
});

export const {
  setAdditionalNotes,
  setadditionalAttachement,
  setAllAdditionalInfo,
} = AdditionalInfoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getAdditionalInfo = (state: RootState) => state.additionalInfo;

export default AdditionalInfoSlice.reducer;
