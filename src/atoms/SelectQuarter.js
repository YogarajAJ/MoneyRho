import React from "react";
import { QUARTERLY_CATEGORY_VALUES } from "../constants";
import SelectComponent from "./SelectComponent";
const SelectQuarter = () => {
  return (
    <SelectComponent
      label="Quarter"
      storeKey="quarter"
      menuItems={QUARTERLY_CATEGORY_VALUES}
    />
  );
};

export default SelectQuarter;
