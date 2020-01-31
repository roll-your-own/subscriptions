import React from 'react';
import { withPermission } from '../Session';
import { usePlans } from '../Plans/hooks';
import { Loader, Message } from '../UI';
import { centsToCurrency } from '../../utils';

const Dashboard = ({ dbUser }) => {
  const { loading, message, plans } = usePlans();
  
  if ( loading ) {
    return <Loader />
  }
  return (
    <div className="dashboard container" data-testid="route-dashboard">
      <h2 className="text-center">Hey, {dbUser.displayName ? dbUser.displayName : dbUser.email}!</h2>
      {!!message && <Message type={message.type} message={message.message} />}
      <div className="plan-cards">
        {!!plans && plans.map(plan => (
          <div className="plan-card" key={plan.id}>
            <h3>{plan.name}</h3>
            <p>{centsToCurrency(plan.amount)} per {plan.interval}</p>
            <p><a href="/dashboard" className="btn">Subscribe</a></p>
          </div>
        ))}
      </div>
    </div>
  )
}

const condition = authUser => !!authUser;
export default withPermission(condition)(Dashboard);
