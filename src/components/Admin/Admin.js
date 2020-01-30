import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { withPermission } from "../Session";
import { ROUTES } from '../../constants';
import { AdminHome, AdminPlans } from './';

const Admin = ({ authUser, dbUser }) => {
  return (
    <div className="route-admin" data-testid="route-admin">
      <h2>Admin</h2>
      <div className="admin-controls">
        <nav className="nav-admin">
          <Link to={ROUTES.ADMIN} data-testid="link-admin-home">Home</Link>
          <Link to={ROUTES.ADMIN_PLANS} data-testid="link-admin-plans">Plans</Link>
        </nav>
        <div className="admin-controls-main">
          <Switch>
            <Route exact path={ROUTES.ADMIN} component={AdminHome} />
            <Route exact path={ROUTES.ADMIN_PLANS} component={AdminPlans} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

const condition = (authUser, dbUser) =>
  authUser && dbUser.admin === true
export default withPermission(condition)(Admin);
