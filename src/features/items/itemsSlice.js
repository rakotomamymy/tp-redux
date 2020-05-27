import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action) => {
      state.value = state.value.filter(v => v !== action.payload);
    },
  },
});

export const { add, remove } = itemsSlice.actions;

export const selectItems = state => state.items.value;

export default itemsSlice.reducer;
