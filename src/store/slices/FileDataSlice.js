import { createSlice } from "@reduxjs/toolkit";
import {
  MONTH_VALUES,
  QUARTERLY_CATEGORY_VALUES,
  WEEKLY_CATEGORY_VALUES,
} from "../../constants";

const getQuarter = (date = new Date()) => {
  return Math.ceil((date.getMonth() + 1) / 3);
};

const getReferenceDate = (
  month_start_weekday,
  month_start_date,
  current_day
) => {
  let ref_date = undefined;
  if (month_start_weekday === 0) ref_date = new Date(month_start_date);
  else {
    let tempMonthStartDate = new Date(month_start_date);
    tempMonthStartDate.setDate(
      tempMonthStartDate.getDate() + (7 - month_start_weekday)
    );
    if (tempMonthStartDate < current_day) {
      ref_date = new Date(tempMonthStartDate);
    } else {
      let old_ref_date = new Date(month_start_date);
      old_ref_date.setMonth(old_ref_date.getMonth() - 1);

      let ref_date_weekday = old_ref_date.getDay() - 1;
      if (ref_date_weekday === 0) {
        ref_date = new Date(old_ref_date);
      } else {
        old_ref_date.setDate(old_ref_date.getDate() + (ref_date_weekday + 2));
        ref_date = new Date(old_ref_date);
      }
    }
  }
  return ref_date;
};

const getWeekOfMonth = (current_day = new Date()) => {
  let current_day_weekday = current_day.getDay() - 1;
  let current_day_month = current_day.getMonth() + 1;

  let new_day = new Date(current_day);
  new_day.setDate(current_day.getDate() - current_day_weekday);

  let new_day_month = new_day.getMonth() + 1;

  let month_to_be_shown =
    current_day_month === new_day_month ? current_day_month : new_day_month;

  let month_start_date = new Date(current_day);
  month_start_date.setDate(1);

  let month_start_weekday = month_start_date.getDay() - 1;
  const ref_date = getReferenceDate(
    month_start_weekday,
    month_start_date,
    current_day
  );

  let day_diff = current_day.getDate() - ref_date.getDate() + 1;

  return {
    month: month_to_be_shown,
    weekNumber: Math.ceil(day_diff / 7),
  };
};

export const getCurrentValues = () => {
  let date = new Date();
  let quarter = QUARTERLY_CATEGORY_VALUES[getQuarter(date) - 1].value;
  let year = date.getFullYear();
  let month = MONTH_VALUES[date.getMonth()].value;
  let week = WEEKLY_CATEGORY_VALUES[getWeekOfMonth(date)["weekNumber"]].value;
  console.log(week);
  return { year, quarter, month, week };
};

const { year, quarter, month, week } = getCurrentValues();

const DEFAULT_STATE = {
  year: year,
  quarter: quarter,
  month: month,
  week: week,
  roi: "",
  capitalAmount: "",
  fileUrl: "",
  file: null,
  disableFileComponent: true,
  reportMetaData: "",
  displayReport: false,
  monthlyRoi: "",
  weeklyRoi: "",
  quarterlyRoi: "",
};
export const FileDataSlice = createSlice({
  name: "fileData",
  initialState: DEFAULT_STATE,
  reducers: {
    updateFileDataFields: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetFileData: (state) => (state = DEFAULT_STATE),
  },
});

export const { updateFileDataFields, resetFileData } = FileDataSlice.actions;

export default FileDataSlice.reducer;
