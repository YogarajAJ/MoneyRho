import { Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import CapitalAndRoI from "../atoms/CapitalAndRoI";
import UserInfoModal from "../atoms/UserInfoModal";
import DocumentViewer from "../molecules/DocumentViewer";
import ReportsDataTable from "../molecules/ReportsDataTable";
import SelectCategoryTabs from "../molecules/SelectCategoryTabs";
import { resetFileData } from "../store/slices/FileDataSlice";

const Reports = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 10);
  }, []);

  React.useEffect(() => {
    return () => dispatch(resetFileData());
  }, [dispatch]);
  return (
    <Stack spacing={3} justifyContent="center" alignItems="center">
      <br />
      <br />
      <Typography variant="h5" align="center">
        <br />
        Reports
      </Typography>
      <SelectCategoryTabs />
      <CapitalAndRoI canEdit={false} />
      <ReportsDataTable />
      <DocumentViewer />
      <UserInfoModal />
    </Stack>
  );
};

export default Reports;
