import React from 'react';
import { withPermission } from '../Session';

const Dashboard = () => {
  return (
    <div className="dashboard" data-testid="route-dashboard">
      <h2>Dashboard</h2>
      <p>This is where all auth users will see their history, etc.</p>
    </div>
  )
}

const condition = authUser => !!authUser;
export default withPermission(condition)(Dashboard);
