import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  mobile_no: '',
  first_name: '',
  last_name: '',
  email:'',
  otp_email:'',
  terms_and_condition:false,
  is_varified:false,
  is_new_user:false,
  country_code:'+966'
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});
export const { updateUserData } = dataSlice.actions;
export const getUserData = (state) => state.updateUserData;
export default dataSlice.reducer;