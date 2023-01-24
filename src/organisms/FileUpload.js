import { Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CapitalAndRoI from "../atoms/CapitalAndRoI";
import FileUploadButton from "../atoms/FileUploadButton";
import DocumentViewer from "../molecules/DocumentViewer";
import SelectCategoryTabs from "../molecules/SelectCategoryTabs";

import { resetFileData } from "../store/slices/FileDataSlice";

const FileUpload = () => {
  const { fileUrl } = useSelector(({ fileData }) => fileData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 10);
  }, []);

  React.useEffect(() => {
    return () => dispatch(resetFileData());
  }, [dispatch]);
  return (
    <Stack alignItems="center" justifyContent="center">
      <br />
      <br />
      <br />
      <Typography variant="h4" align="center">
        Upload Reports
      </Typography>
      <br />
      <SelectCategoryTabs />
      <CapitalAndRoI />
      <br />
      <FileUploadButton />
      <br />
      {fileUrl && <DocumentViewer />}
    </Stack>
  );
};

export default FileUpload;
