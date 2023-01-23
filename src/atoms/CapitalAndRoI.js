import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useScreenResolution } from "../hooks/ResponsiveHook";
import { updateFileDataFields } from "../store/slices/FileDataSlice";

const CapitalAndRoI = ({ canEdit = true }) => {
  const dispatch = useDispatch();
  const { isDesktopOrLaptop, isTabletOrMobile } = useScreenResolution();
  const { roi, capitalAmount } = useSelector(({ fileData }) => fileData);

  const handleChange = (e) => {
    dispatch(
      updateFileDataFields({
        [e.target.name]: e.target.value,
      })
    );
  };

  const stackDirection = () => {
    let direction = "column";
    switch (true) {
      case isDesktopOrLaptop:
        direction = "row";
        break;
      case isTabletOrMobile:
        direction = "column";
        break;
      default:
        direction = "row";
        break;
    }
    return direction;
  };

  const displayReport = (
    <>
      <Typography>
        Capital Amount {capitalAmount && <>&nbsp;&nbsp;-</>}&nbsp;&nbsp;
        {capitalAmount ? <>{capitalAmount}&#8377;</> : "--"}
      </Typography>
      <Typography>
        ROI {roi && <>&nbsp;&nbsp;-</>}&nbsp;&nbsp; {roi ? roi + "%" : "--"}{" "}
      </Typography>
    </>
  );
  const editFields = (
    <>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Capital Amount"
        type="number"
        name="capitalAmount"
        value={capitalAmount}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">&#8377;</InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-basic"
        label="ROI"
        variant="outlined"
        type="number"
        name="roi"
        value={roi}
        onChange={handleChange}
        InputProps={{
          endAdornment: <InputAdornment position="start">%</InputAdornment>,
        }}
      />
    </>
  );

  return (
    <Stack
      width={{ xs: "50%", lg: "30%" }}
      direction={stackDirection()}
      spacing={3}
      alignItems="center"
      justifyContent="space-between"
      margin="0 auto"
    >
      {canEdit ? editFields : displayReport}
    </Stack>
  );
};

export default CapitalAndRoI;
