import React from 'react';
import { Link } from 'react-router-dom';
import { withPermission } from "../Session";
import { ROUTES } from '../../constants';

const Admin = ({ authUser, dbUser }) => {
  return (
    <div className="route-admin" data-testid="route-admin">
      <h2>Admin</h2>
      <div className="admin-controls">
        <nav className="nav-admin">
          <Link to={ROUTES.ADMIN}>Admin</Link>
          <Link to={ROUTES.ADMIN}>Plans</Link>
          <Link to={ROUTES.ADMIN}>Subscribers</Link>
          <Link to={ROUTES.ADMIN}>Coupons</Link>
        </nav>
        <div className="admin-controls-main">
          <h3>Admin</h3>
        </div>
      </div>
    </div>
  )
}

const condition = (authUser, dbUser) =>
  authUser && dbUser.admin === true
export default withPermission(condition)(Admin);
