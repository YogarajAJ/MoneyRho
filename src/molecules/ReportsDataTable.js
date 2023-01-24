import { Box, Button, Stack, Typography } from "@mui/material";
import { get, isEmpty } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../config/RealtimeDatabase";
import { MONTHLY_CATEGORY, WEEKLY_CATEGORY } from "../constants";
import { getFileUrl, searchDocument } from "../service/FileService";
import { updateFileDataFields } from "../store/slices/FileDataSlice";
import { createFileTag } from "../utils";

const ReportsDataTable = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    ({ category }) => category.selectedCategory
  );

  const { year, quarter, month, week, reportMetaData, displayReport } =
    useSelector(({ fileData }) => fileData);

  const validateUser = () => {
    return parseInt(localStorage.getItem('user'));
  };

  const searchReport = async () => {
    if (!validateUser()) {
      dispatch(
        updateFileDataFields({
          userModal: true,
        })
      );
      return;
    }
    const tag = createFileTag();
    const metaData = await searchDocument(tag);
    const url = await getFileUrl(tag);
    const data = await getData("files/" + tag);
    dispatch(
      updateFileDataFields({
        reportMetaData: get(metaData, "name"),
        displayReport: true,
        fileUrl: isEmpty(url) ? "" : url,
        ...data,
      })
    );
  };

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

  return (
    <Stack alignItems="center" justifyContent="center" spacing={3}>
      <Box minWidth={250}>
        <Button
          variant="contained"
          component="label"
          onClick={searchReport}
          fullWidth
          disabled={!disableSelectFile()}
        >
          Fetch Report
        </Button>
      </Box>
      {displayReport && (
        <Typography>Report: {reportMetaData || "File Not Found"}</Typography>
      )}
    </Stack>
  );
};

export default ReportsDataTable;
