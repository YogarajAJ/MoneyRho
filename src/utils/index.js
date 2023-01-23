import { isEmpty } from "lodash";
import {
  MONTHLY_CATEGORY, WEEKLY_CATEGORY
} from "../constants";
import store from "../store";

export const createFileTag = (selectedCategory = "") => {
  const state = store.getState();
  let tag = "";
  if(!selectedCategory){
    selectedCategory = state.category.selectedCategory;
  }
  const { year, quarter, month, week } = state.fileData;
  switch (selectedCategory) {
    case WEEKLY_CATEGORY.value:
      tag = `${year}-${quarter}-${month}-${week}`;
      break;
    case MONTHLY_CATEGORY.value:
      tag = `${year}-${quarter}-${month}`;
      break;
    default:
      tag = `${year}-${quarter}`;
      break;
  }
  return tag;
};

export const splitIntoGroups = (array = [], chunks = 1) => {
  if (isEmpty(array)) return [];
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunks);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
};
