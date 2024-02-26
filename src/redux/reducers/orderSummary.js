import { createSlice } from '@reduxjs/toolkit';
const initialState ={};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateOrderSummary: (state, action) => {
      return action.payload;
    },
  },
});
export const { updateOrderSummary } = dataSlice.actions;
export const getOrderSummary = (state) => state.updateOrderSummary;
export default dataSlice.reducer;