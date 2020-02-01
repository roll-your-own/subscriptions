import React from "react";
import { withPermission } from "../Session";

const Dashboard = () => {
  return (
    <div className="dashboard" data-testid="route-dashboard">
      <div className="container">
        <h2>Dashboard</h2>
      </div>
    </div>
  );
};

const condition = authUser => !!authUser;
export default withPermission(condition)(Dashboard);
