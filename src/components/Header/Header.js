import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthUserContext } from '../Session';
import { auth } from '../../firebase';
import { ROUTES } from '../../constants';

const HeaderAuth = ({ authUser }) => (
  <div className="header" data-testid="comp-header-auth">
    <h1 className="logo" data-testid="logo">
      <Link to={ROUTES.DASHBOARD} data-testid="link-logo">RYO SUBSCRIPTIONS</Link>
    </h1>
    <nav className="nav-primary">
      <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
      <button onClick={auth.signOut}>Sign Out</button>
    </nav>
  </div>
);

const HeaderNonAuth = () => (
  <div className="header" data-testid="comp-header">
    <h1 className="logo" data-testid="logo">
      <Link to={ROUTES.HOME} data-testid="link-logo">RYO SUBSCRIPTIONS</Link>
    </h1>
    <Link to={ROUTES.HOME} data-testid="link-home">Home</Link>
    <Link to={ROUTES.ABOUT} data-testid="link-about">About</Link>
    <Link to={ROUTES.SIGN_UP} data-testid="link-signup">Sign Up</Link>
    <Link to={ROUTES.SIGN_IN} data-testid="link-signin">Sign In</Link>
  </div>
);

export const Header = () => {
  const { authUser } = useAuthUserContext();
  return (
    <>
      {authUser ? <HeaderAuth authUser={authUser} /> : <HeaderNonAuth />}
    </>
  )
}
