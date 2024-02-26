import { createSlice } from '@reduxjs/toolkit';
const initialState =[];
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      return action.payload;
    },
  },
});
export const { updateCategories } = dataSlice.actions;
export const getAllCategories = (state) => state.updateCategories;
export default dataSlice.reducer;