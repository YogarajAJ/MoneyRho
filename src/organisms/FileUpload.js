import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CapitalAndRoI from "../atoms/CapitalAndRoI";
import FileUploadButton from "../atoms/FileUploadButton";
import DocumentViewer from "../molecules/DocumentViewer";
import SelectCategoryTabs from "../molecules/SelectCategoryTabs";

const FileUpload = () => {
  const { fileUrl } = useSelector(({ fileData }) => fileData);
  return (
    <Stack alignItems="center" justifyContent="center">
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
