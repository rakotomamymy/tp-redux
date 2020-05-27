import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    decrement: (state, action) => {
      state.value = state.value.filter(v => v !== action.payload);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
