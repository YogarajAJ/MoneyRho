import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const LoaderComponent = () => {
  const load = useSelector(({ loader }) => loader.load);

  return (
    <Backdrop open={load}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoaderComponent;
