import { createSlice } from '@reduxjs/toolkit';
const initialState ={};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateOrderData: (state, action) => {
      return action.payload;
    },
  },
});
export const { updateOrderData } = dataSlice.actions;
export const getOrderData = (state) => state.updateOrderData;
export default dataSlice.reducer;