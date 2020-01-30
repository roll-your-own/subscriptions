import { useEffect, useState } from 'react';
import { db } from '../../firebase';

export const usePlans = (uid) => {
  const [plans, setPlans] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  
  useEffect(() => {
    db.plans(uid)
      .get()
      .then(snapshot => {
        const allPlans = snapshot.docs.map(plan => ({
          ...plan.data(),
          id: plan.id,
        }))
        setPlans(allPlans);
        setLoading(false);
      })
      .catch(error => {
        setMessage({type: 'error', message: error.message});
        setLoading(false);
      })
  }, [uid]);
  return { loading, message, plans }
}

export const usePlan = (uid, planID) => {
  const [plan, setPlan] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    db.plan(uid, planID)
      .get()
      .then((snapshot) => {
        setPlan(snapshot.data());
        setLoading(false);
      })
      .catch(error => {
        setMessage({type: 'error', message: error.message})
        setLoading(false);
      })
  }, [uid, planID])
  return { loading, message, plan }
}
