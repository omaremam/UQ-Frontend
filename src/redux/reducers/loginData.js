import { createSlice } from '@reduxjs/toolkit';
const initialState ={};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      return action.payload;
    },
  },
});
export const { updateAuth } = dataSlice.actions;
export const getAuth = (state) => state.updateAuth;
export default dataSlice.reducer;