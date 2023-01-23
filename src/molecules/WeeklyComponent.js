import React from "react";
import SelectMonth from "../atoms/SelectMonth";
import SelectQuarter from "../atoms/SelectQuarter";
import SelectWeek from "../atoms/SelectWeek";
import SelectYear from "../atoms/SelectYear";

const WeeklyComponent = () => {
  return (
    <>
      <SelectYear />
      <SelectQuarter />
      <SelectMonth />
      <SelectWeek />
    </>
  );
};

export default WeeklyComponent;
