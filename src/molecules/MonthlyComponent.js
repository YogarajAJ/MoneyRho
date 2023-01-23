import React from "react";
import SelectMonth from "../atoms/SelectMonth";
import SelectQuarter from "../atoms/SelectQuarter";
import SelectYear from "../atoms/SelectYear";

const MonthlyComponent = () => {
  return (
    <>
      <SelectYear />
      <SelectQuarter />
      <SelectMonth />
    </>
  );
};

export default MonthlyComponent;
