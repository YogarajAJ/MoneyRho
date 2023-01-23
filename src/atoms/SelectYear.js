import React from "react";
import { getYears } from "../config/RealtimeDatabase";
import SelectComponent from "./SelectComponent";

const SelectYear = () => {
  const [years, setYears] = React.useState([]);
  React.useEffect(() => {
    const loadYears = async () => {
      const allYears = await getYears();
      console.log("test", allYears);
      setYears(allYears);
    };

    loadYears();
  }, []);

  return (
    <SelectComponent label="Year" storeKey="year" menuItems={years} />
  );
};

export default SelectYear;
