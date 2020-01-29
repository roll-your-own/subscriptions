import React from 'react';
import PropTypes from 'prop-types';
import { withPermission } from '../Session';
import { Avatar } from '../UI';
import { EditUser } from './EditUser';

const Account = ({ authUser, dbUser }) => (
  <div className="ui-account" data-testid="route-account">
    <div className="ui-account-header">
      <Avatar user={dbUser} wrapperClass={"ui-account-avatar"} />
      <h2 className="ui-account-display-name" data-testid="displayname">{dbUser.displayName}</h2>
      <p className="ui-account-email" data-testid="email">{authUser.email}</p>
    </div>
    <EditUser authUser={authUser} dbUser={dbUser} />
  </div>
);

Account.propTypes = {
  authUser: PropTypes.object.isRequired,
  dbUser: PropTypes.object.isRequired,
}

const condition = authUser => !!authUser;
export default withPermission(condition)(Account);
