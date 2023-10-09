import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UtilsState {
    titleCasedString: string;
}

const initialState: UtilsState = {
    titleCasedString: '',
};

const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
      toTitleCase: (state, action: PayloadAction<string>) => {
        state.titleCasedString = action.payload.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      },
    },
  });

export const { toTitleCase } = utilsSlice.actions;

export default utilsSlice.reducer;