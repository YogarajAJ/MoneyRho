import { child, getDatabase, get, ref, set, push } from "firebase/database";
import store from "../store";
import { updateFileDataFields } from "../store/slices/FileDataSlice";
import { firebaseApp } from "./Firebase";
// import setData from "lodash/set";

const database = getDatabase(firebaseApp);

export const getYears = async () => {
  const yearsRef = ref(database);
  try {
    const snapshot = await get(child(yearsRef, "years"));
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return [];
  } catch (e) {
    return [];
  }
};

export const createData = async (payload = null, tag = "") => {
  if (!tag || !payload) return null;
  set(ref(database, tag), payload);
};

export const addData = async (payload=null , tag='') => {
  if (!tag || !payload) return null;
  push(ref(database, tag), payload);
}
export const getData = async (tag = "") => {
  if (!tag) return null;
  const snapshot = await get(child(ref(database), tag));
  if (snapshot.exists()) {
    return snapshot.val();
  }
  return [];
};

export const fetchFacts = async () => {
  const snapshot = await get(child(ref(database), "files"));
  if (snapshot.exists()) {
    const roiMap = createRoiMap(snapshot);
    const { monthlyRoi, weeklyRoi, quarterlyRoi } = calculateRoi(roiMap);
    store.dispatch(
      updateFileDataFields({ monthlyRoi, weeklyRoi, quarterlyRoi })
    );
  } else {
    console.log(snapshot);
  }
};

const createRoiMap = (snapshot = {}) => {
  let data = snapshot.val();
  let map = {
    quarterly: [],
    monthly: [],
    weekly: [],
  };
  Object.keys(data).forEach((i) => {
    let len = i.split("-").length;
    switch (len) {
      case 2:
        map["quarterly"].push(data[i].roi);
        break;
      case 3:
        map["monthly"].push(data[i].roi);
        break;
      case 4:
        map["weekly"].push(data[i].roi);
        break;
      default:
        break;
    }
  });
  return map;
};

const calculateRoi = ({ monthly = [], weekly = [], quarterly = [] }) => {
  let result = {
    weeklyRoi: weekly.reduce((a, b) => a + parseFloat(b), 0) / weekly.length,
    monthlyRoi: monthly.reduce((a, b) => a + parseFloat(b), 0) / monthly.length,
    quarterlyRoi:
      quarterly.reduce((a, b) => a + parseFloat(b), 0) / quarterly.length,
  };
  console.log(result);
  return result;
};

// const createTagData = (tag = "", data = {}) => {
//   const tagList = tag.split("-");
//   let result = "";
//   tagList.forEach((i, index) => {
//     console.log(i);
//     result += `${i}`;
//     if (!(index === tagList.length - 1)) {
//       result += ".";
//     }
//   });

//   let newObj = {};
//   setData(newObj, result, data);
//   console.log(newObj);
//   return newObj;
// };
