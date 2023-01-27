import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import get from "lodash/get";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFileDataFields } from "../store/slices/FileDataSlice";
const SelectComponent = ({ storeKey = "", menuItems = [], label = "" }) => {
  const dispatch = useDispatch();

  const selectedData = useSelector(({ fileData }) =>
    get(fileData, storeKey, "")
  );

  const handleChange = (event) => {
    dispatch(
      updateFileDataFields({
        [storeKey]: event.target.value,
      })
    );
  };

  const generateMenuItems = () => {
    return menuItems.map((data, index) => (
      <MenuItem value={data.value} key={index}>
        {data.label}
      </MenuItem>
    ));
  };
  return (
    <Box sx={{ minWidth: 240 }}>
      <FormControl fullWidth bordercolor="primary" color="primary">
        <InputLabel id="demo-simple-select-label" sx={{ color:'#fff'}}>
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedData}
          label="Select"
          color="primary"
          variant="outlined"
          onChange={handleChange}
          sx={{
            color: '#fff',
            bordercolor:'#fff',
            '& .MuiOutlinedInput-notchedOutline': {
                bordercolor: '#FF4A17',
            },
            "&:hover": {
              "&& fieldset": {
                border: "3px solid #FF4A17"
              }
            },
            '& .MuiSvgIcon-root': {
                color: '#fff'
            }
          }}
        >
          {generateMenuItems()}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
