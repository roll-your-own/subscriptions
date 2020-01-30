import { functions } from './firebase';

export const createPlan = (name, amount, currency, interval) => {
  let createStripePlan = functions.httpsCallable('createStripePlan');
  return createStripePlan({ uid, name, amount, currency, interval })
}

export const editPlan = (name) => {
  let editStripePlan = functions.httpsCallable('editStripePlan');
  return editStripePlan({ uid, name })
}

export const deletePlan = (planID, productID) => {
  let deleteStripePlan = functions.httpsCallable('deleteStripePlan');
  return deleteStripePlan({ uid, planID, productID })
}
