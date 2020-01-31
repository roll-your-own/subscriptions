import React from "react";
import { withPermission } from "../Session";
import { PaymentMethod } from "../PaymentMethod";

const Dashboard = ({ dbUser }) => {
  return (
    <div className="dashboard" data-testid="route-dashboard">
      <h2 className="text-center">
        Hey, {dbUser.displayName ? dbUser.displayName : dbUser.email}!
      </h2>
      <div className="form-card">
        <PaymentMethod dbUser={dbUser} />
      </div>
    </div>
  );
};

const condition = authUser => !!authUser;
export default withPermission(condition)(Dashboard);
