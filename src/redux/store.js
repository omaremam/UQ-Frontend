import { configureStore } from "@reduxjs/toolkit";
import updateUserData from './reducers/user';
import updateMyAddress from "./reducers/myAddress"
import updateCategories from "./reducers/allCategories"
import updateAuth from "./reducers/loginData"
import updateOrderData from "./reducers/orderData"
import updateOrderSummary from "./reducers/orderSummary"
import loader from "./reducers/loader";
import snackbar from "./reducers/snackbar";
export default configureStore({
  reducer: {
    updateMyAddress:updateMyAddress,
    updateUserData:updateUserData,
    updateCategories:updateCategories,
    updateAuth:updateAuth,
    updateOrderData:updateOrderData,
    updateOrderSummary:updateOrderSummary,
    loader:loader,
    snackbar:snackbar
  },
});
