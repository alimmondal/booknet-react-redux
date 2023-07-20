/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IBook } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICart {
  books: IBook[];
  total: number;
}
const initialState: ICart = {
  books: [],
  total: 0,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );
      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.books.push({ ...action.payload, quantity: 1 });
      }
      // state.total += action.payload.price;
      state.total = state.total + action.payload.price;
    },
    removeOne: (state, action: PayloadAction<IBook>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );
      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.books = state.books.filter(
          (book) => book._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
      state.total += action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
