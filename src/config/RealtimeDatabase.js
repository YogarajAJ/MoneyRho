import { child, getDatabase, get, ref, set } from "firebase/database";
import { firebaseApp } from "./Firebase";

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
  set(ref(database, tag), {
    roi: payload.roi,
    capitalAmount: payload.capitalAmount,
  });
};

export const getData = async (tag = "") => {
  if (!tag) return null;
  const snapshot = await get(child(ref(database), tag));
  if (snapshot.exists()) {
    return snapshot.val();
  }
  return [];
};
