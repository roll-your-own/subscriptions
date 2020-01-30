import React from 'react';
import { useParams } from 'react-router-dom';
import { usePlan } from './hooks';
import { Loader, Message } from '../UI';
import { centsToCurrency, intervalLang } from '../../utils';
import { DeletePlanBtn } from './DeletePlanBtn';

export const Plan = ({ dbUser }) => {
  const { id } = useParams();
  const { loading, message, plan } = usePlan(id);
  
  if ( loading ) {
    return <Loader />
  }
  return (
    <div className="plan" data-testid="route-plan">
      {!!message && <Message type={message.type} message={message.message} />}
      <h2>{plan.name}</h2>
      <h3 style={{ paddingTop: 0}}>{centsToCurrency(plan.amount)} {plan.currency} {intervalLang(plan.intervalCount)} a {plan.interval}</h3>
      <p className="hr-text text-error"><span>Danger Area</span></p>
      <DeletePlanBtn planID={plan.stripePlanID} productID={plan.stripeProductID} />
    </div>
  )
}
