import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ROUTES } from '../../constants';
import { usePlans } from './hooks';
import { Loader, Message } from '../UI';
import { centsToCurrency } from '../../utils';

export const Plans = ({ dbUser }) => {
  const { loading, message, plans } = usePlans(dbUser.uid);
  
  if (loading) {
    return <Loader />
  }
  return (
    <div className="plans">
      {message && <Message type={message.type} message={message.message} />}
      <header className="header-tools">
        <h3>Plans</h3>
        <p><Link to={ROUTES.NEW_PLAN}><button className="btn btn-small"><FontAwesomeIcon icon={faPlus} style={{marginRight: "10px"}} /> New Plan</button></Link></p>
      </header>
      {!plans.length
        ? <p>You haven't created any plans yet. <Link to={ROUTES.NEW_PLAN}>Create you first plan</Link>.</p>
        : (
          <div className="table">
            {!!plans && plans.map(plan => (
              <Link key={plan.id} className="table-item plans-plan" to={`${ROUTES.PLANS}/${plan.id}`}>
                <span className="table-item-header">{plan.name}</span>
                <span>{centsToCurrency(plan.amount)} {plan.currency} per {plan.interval}</span>
              </Link>
            ))}
          </div>
        )}
    </div>
  )
}
