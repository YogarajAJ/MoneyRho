import { Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import CapitalAndRoI from "../atoms/CapitalAndRoI";
import DocumentViewer from "../molecules/DocumentViewer";
import ReportsDataTable from "../molecules/ReportsDataTable";
import SelectCategoryTabs from "../molecules/SelectCategoryTabs";
import { resetFileData } from "../store/slices/FileDataSlice";

const Reports = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => dispatch(resetFileData());
  }, [dispatch]);
  return (
    <Stack spacing={3} justifyContent="center" alignItems="center">
      <br />
      <Typography variant="h5" align="center">
        <br />
        Reports
      </Typography>
      <SelectCategoryTabs />
      <CapitalAndRoI canEdit={false} />
      <ReportsDataTable />
      <DocumentViewer />
    </Stack>
  );
};

export default Reports;
