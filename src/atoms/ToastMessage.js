import { Alert, Snackbar } from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLoaderFields } from "../store/slices/LoaderSlice";

const ToastMessage = () => {
  const dispatch = useDispatch();
  const { alertText, severity } = useSelector(({ loader }) => loader);

  const handleClose = () => {
    dispatch(
      updateLoaderFields({
        alertText: "",
      })
    );
  };
  return (
    <Snackbar
      open={!isEmpty(alertText)}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={handleClose}
    >
      <Alert variant="filled" elevation={7} severity={severity} sx={{ width: "100%" }} onClose={handleClose}>
        {alertText}
      </Alert>
    </Snackbar>
  );
};

export default ToastMessage;
