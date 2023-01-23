import { Stack, Typography } from "@mui/material";
import React from "react";
import CapitalAndRoI from "../atoms/CapitalAndRoI";
import DocumentViewer from "../molecules/DocumentViewer";
import ReportsDataTable from "../molecules/ReportsDataTable";
import SelectCategoryTabs from "../molecules/SelectCategoryTabs";

const Reports = () => {
  return (
    <Stack spacing={3} justifyContent='center' alignItems='center'>
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
