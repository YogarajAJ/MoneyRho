import React from "react";
import { useSelector } from "react-redux";
import { MONTH_VALUES, QUARTERLY_CATEGORY_VALUES } from "../constants";
import { splitIntoGroups } from "../utils";
import SelectComponent from "./SelectComponent";
const SelectMonth = () => {
  const allMonths = splitIntoGroups(MONTH_VALUES, 3);
  const quarter = useSelector(({ fileData }) => fileData.quarter);
  const getMonthsByQuarter = () => {
    let months = MONTH_VALUES;
    switch (quarter) {
      case QUARTERLY_CATEGORY_VALUES[0].value:
        months = allMonths[0];
        break;
      case QUARTERLY_CATEGORY_VALUES[1].value:
        months = allMonths[1];
        break;
      case QUARTERLY_CATEGORY_VALUES[2].value:
        months = allMonths[2];
        break;
      case QUARTERLY_CATEGORY_VALUES[3].value:
        months = allMonths[3];
        break;
      default:
        break;
    }
    return months;
  };
  const months = getMonthsByQuarter();
  return (
    <SelectComponent label="Month" storeKey="month" menuItems={months} />
  );
};

export default SelectMonth;
