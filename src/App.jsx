import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import { currentLoader, changeLoader } from "./redux/reducers/loader";
import { useSelector, useDispatch } from "react-redux";
import Snackbars from "./utils/global/Snackbars";
import { setSnackbar, snackObj } from "./redux/reducers/snackbar";
import { updateAuth, getAuth } from "./redux/reducers/loginData";
import Loaders from "./utils/global/Loders";
import * as CUSTOM from "./utils/helper/custom";
function App() {
  const loading = useSelector(currentLoader);
  const snackbarObj = useSelector(snackObj);
  const dispatch = useDispatch();

  useEffect(() => {
    if (snackbarObj?.snackbarOpen) {
      setTimeout(() => {
        dispatch(
          setSnackbar({
            ...snackbarObj,
            snackbarOpen: false,
          })
        );
      }, 2000);
    }
  }, [snackbarObj?.snackbarOpen]);

  useEffect(() => {
    if (loading == "loggedin") {
      dispatch(updateAuth(CUSTOM.loginData()));
      dispatch(changeLoader(false));
    }
  }, [loading]);

  useEffect(() => {
    if (loading == "closepopup") {
      document.body.classList.remove("overflow-hidden");
      const headerBox = document.getElementById("header-box");
      if (headerBox) {
        headerBox.classList.remove("relative");
      }
      dispatch(changeLoader(false));
    }
  }, [loading]);

  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
    const headerBox = document.getElementById("header-box");
    if (headerBox) {
      headerBox.classList.remove("relative");
    }
  }, []);

  useEffect(() => {
    dispatch(updateAuth(CUSTOM.loginData()));
    dispatch(changeLoader(false));
  }, []);

  useEffect(() => {
    if (loading === "removeBodyClass") {
      const headerBox = document.getElementById("header-box");
      if (headerBox) {
        document.body.classList.remove("overflow-hidden");
        headerBox.classList.remove("relative");
        headerBox.classList.remove("relative");
        dispatch(changeLoader(false));
      }
    }
  }, [loading]);

  useEffect(() => {
    const headerBox = document.getElementById("header-box");
    if (headerBox) {
      document.body.classList.remove("overflow-hidden");
      headerBox.classList.remove("relative");
      headerBox.classList.remove("relative");
    }
  }, []);

  return (
    <>
      <Routes />
      {loading ? <Loaders /> : null}
      {snackbarObj?.snackbarOpen ? (
        <Snackbars
          snackBarMessage={snackbarObj?.snackbarMessage}
          snackbarOpen={snackbarObj?.snackbarOpen}
          snackBarState={snackbarObj?.snackbarState}
        />
      ) : null}
    </>
  );
}

export default App;
