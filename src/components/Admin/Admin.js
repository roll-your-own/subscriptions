import React from 'react';
import { withPermission } from "../Session";

const Admin = ({ authUser, dbUser }) => {
  return (
    <div data-testid="route-admin">
      <h2>Admin</h2>
    </div>
  )
}

const condition = (authUser, dbUser) =>
  authUser && dbUser.admin === true
export default withPermission(condition)(Admin);
