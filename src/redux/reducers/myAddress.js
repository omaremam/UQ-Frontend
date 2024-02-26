import { createSlice } from '@reduxjs/toolkit';
const initialState = {
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateMyAddress: (state, action) => {
      const newData = action.payload;
      Object.keys(newData).forEach((key) => {
        state[key] = newData[key];
      });
    },
  },
});
export const { updateMyAddress } = dataSlice.actions;
export const getAddressData = (state) => state.updateMyAddress;
export default dataSlice.reducer;