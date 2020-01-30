import { functions } from './firebase';

export const createPlan = (name, amount, currency, intervalCount, interval) => {
  let createStripePlan = functions.httpsCallable('createStripePlan');
  return createStripePlan({ name, amount, currency, intervalCount, interval })
}

export const editPlan = (name) => {
  let editStripePlan = functions.httpsCallable('editStripePlan');
  return editStripePlan({ name })
}

export const deletePlan = (planID, productID) => {
  let deleteStripePlan = functions.httpsCallable('deleteStripePlan');
  return deleteStripePlan({ planID, productID })
}
