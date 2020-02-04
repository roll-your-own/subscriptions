import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { ROUTES } from "../../constants";
import { withPermission } from "../Session";
import { DashboardHome } from "./DashboardHome";
import { PaymentMethods, NewPaymentMethod } from "../PaymentMethods";
import { Subscriptions, Subscribe } from "../Subscriptions";

const Dashboard = ({ dbUser }) => {
  return (
    <div className="dashboard" data-testid="route-dashboard">
      <div className="container">
        <h2>Dashboard</h2>
        <div className="controls">
          <nav className="controls-nav">
            <NavLink exact to={ROUTES.DASHBOARD}>
              Home
            </NavLink>
            <NavLink exact to={ROUTES.SUBSCRIPTIONS}>
              Subscriptions
            </NavLink>
            <NavLink exact to={ROUTES.PAYMENT_METHODS}>
              Payment Methods
            </NavLink>
          </nav>
          <div className="controls-main">
            <Switch>
              <Route exact path={ROUTES.DASHBOARD} component={DashboardHome} />
              <Route
                exact
                path={ROUTES.SUBSCRIPTIONS}
                render={props => <Subscriptions {...props} dbUser={dbUser} />}
              />
              <Route
                exact
                path={ROUTES.SUBSCRIBE}
                render={props => <Subscribe {...props} dbUser={dbUser} />}
              />
              <Route
                exact
                path={ROUTES.PAYMENT_METHODS}
                render={props => <PaymentMethods {...props} dbUser={dbUser} />}
              />
              <Route
                exact
                path={ROUTES.NEW_PAYMENT_METHOD}
                render={props => (
                  <NewPaymentMethod {...props} dbUser={dbUser} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

const condition = authUser => !!authUser;
export default withPermission(condition)(Dashboard);
