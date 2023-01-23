import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createData } from "../config/RealtimeDatabase";
import { MONTHLY_CATEGORY, WEEKLY_CATEGORY } from "../constants";
import { uploadFile } from "../service/FileService";
import { updateFileDataFields } from "../store/slices/FileDataSlice";
import { createFileTag } from "../utils";

const FileUploadButton = () => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    ({ category }) => category.selectedCategory
  );

  const { year, quarter, month, week, file, roi, capitalAmount } = useSelector(
    ({ fileData }) => fileData
  );

  const disableSelectFile = () => {
    switch (selectedCategory) {
      case WEEKLY_CATEGORY.value:
        return year && quarter && month && week;
      case MONTHLY_CATEGORY.value:
        return year && quarter && month;
      default:
        return year && quarter;
    }
  };

  const handleChange = async (e) => {
    let myFile = e.target.files;
    dispatch(
      updateFileDataFields({
        file: myFile,
      })
    );
  };

  const upload = async () => {
    const tag = createFileTag(selectedCategory);
    await uploadFile(file, tag);
    await createData({ roi, capitalAmount }, "files/"+tag);
  };

  return (
    <Stack alignItems="center" justifyContent="center" spacing={3}>
      <Box minWidth={250}>
        <Button
          variant="contained"
          component="label"
          fullWidth
          disabled={!disableSelectFile()}
        >
          Select File
          <input
            accept="application/pdf"
            onChange={handleChange}
            type="file"
            hidden
          />
        </Button>
        {file && <Typography>Selected File: {file.name} </Typography>}
      </Box>
      <Box minWidth={250}>
        <Button
          variant="contained"
          component="label"
          fullWidth
          onClick={upload}
          disabled={!file}
        >
          Upload
        </Button>
      </Box>
    </Stack>
  );
};

export default FileUploadButton;
