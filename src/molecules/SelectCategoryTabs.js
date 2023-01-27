import { Box, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  MONTHLY_CATEGORY,
  QUARTERLY_CATEGORY,
  WEEKLY_CATEGORY
} from "../constants";
import { useScreenResolution } from "../hooks/ResponsiveHook";
import { updateCategoryFields } from "../store/slices/CategorySlice";
import { resetFileData } from "../store/slices/FileDataSlice";
import MonthlyComponent from "./MonthlyComponent";
import QuarterlyComponent from "./QuarterlyComponent";
import WeeklyComponent from "./WeeklyComponent";

const SelectCategoryTabs = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const { isDesktopOrLaptop, isTabletOrMobile } = useScreenResolution();

  const stackDirection = () => {
    let direction = "column";
    switch (true) {
      case isDesktopOrLaptop:
        direction = "row";
        break;
      case isTabletOrMobile:
        direction = "column";
        break;
      default:
        direction = "row";
        break;
    }
    return direction;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(
      updateCategoryFields({
        selectedCategory: tabbedComponents[newValue].category,
      })
    );
    dispatch(resetFileData());
    event.stopPropagation();
  };

  const tabbedComponents = [
    { category: QUARTERLY_CATEGORY.value, component: <QuarterlyComponent /> },
    { category: MONTHLY_CATEGORY.value, component: <MonthlyComponent /> },
    { category: WEEKLY_CATEGORY.value, component: <WeeklyComponent /> },
  ];

  return (
    <React.Fragment>
      <Box sx={{ borderBottom: 1, bordercolor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          
        >
          <Tab label="Quarterly" sx={{ color:'#fff'}} />
          <Tab label="Monthly" sx={{ color:'#fff'}} />
          <Tab label="Weekly" sx={{ color:'#fff'}}/>
        </Tabs>
      </Box>
      <br />
      <Stack
        alignItems="center"
        justifyContent="center"
        direction={stackDirection()}
        spacing={3}
      >
        {tabbedComponents[value].component}
      </Stack>
      <br />
    </React.Fragment>
  );
};

export default SelectCategoryTabs;
