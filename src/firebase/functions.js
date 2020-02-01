import { functions } from "./firebase";

export const createPlan = (
  name,
  amount,
  currency,
  intervalCount,
  interval,
  startDate
) => {
  let createStripePlan = functions.httpsCallable("createStripePlan");
  return createStripePlan({
    name,
    amount,
    currency,
    intervalCount,
    interval,
    startDate
  });
};

export const editPlan = name => {
  let editStripePlan = functions.httpsCallable("editStripePlan");
  return editStripePlan({ name });
};

export const deletePlan = (planID, productID) => {
  let deleteStripePlan = functions.httpsCallable("deleteStripePlan");
  return deleteStripePlan({ planID, productID });
};

export const setUserSource = (uid, source) => {
  let setUserSource = functions.httpsCallable("setUserSource");
  return setUserSource({ uid, source });
};
