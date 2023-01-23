import React from "react";
import { WEEKLY_CATEGORY_VALUES } from "../constants";
import SelectComponent from "./SelectComponent";
const SelectWeek = () => {
  return (
    <SelectComponent
      label="Week"
      storeKey="week"
      menuItems={WEEKLY_CATEGORY_VALUES}
    />
  );
};

export default SelectWeek;
