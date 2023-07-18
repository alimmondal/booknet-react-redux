/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  priceRange: number;
}
const initialState: IProduct = {
  status: false,
  priceRange: 150,
};

const bookSlice = createSlice({
  initialState,
  name: 'books',
  reducers: {
    toggleStatus: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleStatus, setPriceRange } = bookSlice.actions;

export default bookSlice.reducer;
