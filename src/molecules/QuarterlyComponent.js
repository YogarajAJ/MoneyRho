import React from "react";
import SelectQuarter from "../atoms/SelectQuarter";
import SelectYear from "../atoms/SelectYear";

const QuarterlyComponent = () => {
  return (
    <>
      <SelectYear />
      <SelectQuarter />
    </>
  );
};

export default QuarterlyComponent;
