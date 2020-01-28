import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const Header = () => {
  return (
    <div className="header" data-testid="comp-header">
      <h1 className="logo" data-testid="logo">
        <Link to={ROUTES.HOME} data-testid="link-logo">R.Y.O. Subscriptions</Link>
      </h1>
      <nav className="nav-primary">
        <Link to={ROUTES.HOME} data-testid="link-home">Home</Link>
        <Link to={ROUTES.ABOUT} data-testid="link-about">About</Link>
        <Link to={ROUTES.SIGNUP} data-testid="link-signup">Sign Up</Link>
        <Link to={ROUTES.SIGNIN} data-testid="link-signin">Sign In</Link>
      </nav>
    </div>
  )
}
