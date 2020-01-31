import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthUserContext } from "../Session";
import { auth } from "../../firebase";
import { ROUTES } from "../../constants";

const HeaderAuth = ({ dbUser }) => (
  <div className="header" data-testid="comp-header-auth">
    <div className="container">
      <h1 className="logo" data-testid="logo">
        <Link to={ROUTES.DASHBOARD} data-testid="link-logo">
          RYO SUBSCRIPTIONS
        </Link>
      </h1>
      <nav className="nav-primary">
        {!!dbUser && dbUser.admin === true ? (
          <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
        ) : null}
        <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
        <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
        <button onClick={auth.signOut}>Sign Out</button>
      </nav>
    </div>
  </div>
);

const HeaderNonAuth = () => (
  <div className="header" data-testid="comp-header">
    <div className="container">
      <h1 className="logo" data-testid="logo">
        <Link to={ROUTES.HOME} data-testid="link-logo">
          RYO SUBSCRIPTIONS
        </Link>
      </h1>
      <nav className="nav-primary">
        <NavLink to={ROUTES.HOME} data-testid="link-home">
          Home
        </NavLink>
        <NavLink to={ROUTES.ABOUT} data-testid="link-about">
          About
        </NavLink>
        <NavLink to={ROUTES.SIGN_UP} data-testid="link-signup">
          Sign Up
        </NavLink>
        <NavLink to={ROUTES.SIGN_IN} data-testid="link-signin">
          Sign In
        </NavLink>
      </nav>
    </div>
  </div>
);

export const Header = () => {
  const { authUser, dbUser } = useAuthUserContext();
  return (
    <>
      {authUser ? (
        <HeaderAuth authUser={authUser} dbUser={dbUser} />
      ) : (
        <HeaderNonAuth />
      )}
    </>
  );
};
