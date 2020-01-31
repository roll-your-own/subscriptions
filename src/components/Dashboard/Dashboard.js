import React from "react";
import { withPermission } from "../Session";

const Dashboard = ({ dbUser }) => {
  return (
    <div className="dashboard container" data-testid="route-dashboard">
      <h2 className="text-center">
        Hey, {dbUser.displayName ? dbUser.displayName : dbUser.email}!
      </h2>
    </div>
  );
};

const condition = authUser => !!authUser;
export default withPermission(condition)(Dashboard);
