import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const DocumentViewer = () => {
  const { fileUrl, roi } = useSelector(({ fileData }) => fileData);
  return (
    roi &&
    fileUrl && (
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          height: "100vh",
          width: "90%",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`${fileUrl}#view=fitH`}
          type="application/pdf"
        />
      </Box>
    )
  );
};

export default DocumentViewer;
