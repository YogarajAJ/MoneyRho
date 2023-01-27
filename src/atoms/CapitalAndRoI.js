import {
  Grid,
  InputAdornment, TextField,
  Typography
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { STYLED_TYPO_PROPS } from "../organisms/Login";
import { updateFileDataFields } from "../store/slices/FileDataSlice";

const CapitalAndRoI = ({ canEdit = true }) => {
  const dispatch = useDispatch();
  const { roi, capitalAmount } = useSelector(({ fileData }) => fileData);

  const handleChange = (e) => {
    dispatch(
      updateFileDataFields({
        [e.target.name]: e.target.value,
      })
    );
  };

  const displayReport = (
    <>
      <Grid item xs={12} lg={6}>
        <Typography align="center" fontWeight={700} sx={{ color: "#fff" }}>
          Capital Amount {capitalAmount && <>&nbsp;&nbsp;-</>}&nbsp;&nbsp;
          {capitalAmount ? <>{capitalAmount}&#8377;</> : "--"}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography align="center" fontWeight={700} sx={{ color: "#fff" }}>
          ROI {roi && <>&nbsp;&nbsp;-</>}&nbsp;&nbsp; {roi ? roi + "%" : "--"}{" "}
        </Typography>
      </Grid>
    </>
  );
  const editFields = (
    <>
      <Grid item xs={9} lg={6}>
        <TextField
        fullWidth
          id="outlined-basic"
          variant="outlined"
          label="Capital Amount"
          type="number"
          name="capitalAmount"
          value={capitalAmount}
          onChange={handleChange}
          sx={STYLED_TYPO_PROPS}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <span style={{ color: "#fff" }}>&#8377;</span>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={9} lg={6}>
        <TextField
        fullWidth
          id="outlined-basic"
          label="ROI"
          variant="outlined"
          type="number"
          name="roi"
          value={roi}
          onChange={handleChange}
          sx={STYLED_TYPO_PROPS}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <span style={{ color: "#fff" }}>%</span>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </>
  );

  return (
    // <Stack
    //   width={{ xs: "50%", lg: "30%" }}
    //   direction={stackDirection()}
    //   spacing={3}
    //   alignItems="center"
    //   justifyContent="space-between"
    //   margin="0 auto"
    // >
    <Grid
      container
      width={{ lg: "40%", xs: "100%" }}
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      {canEdit ? editFields : displayReport}
    </Grid>
    // </Stack>
  );
};

export default CapitalAndRoI;
