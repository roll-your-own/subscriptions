import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthUserContext, useAuthState } from '../Session';
import { ROUTES } from '../../constants';
import { Header, Home, About, SignUp, SignIn, ForgotPassword, NoMatch, NotAllowed, Dashboard, Account } from '../';
import { Loader } from '../UI';

export const App = () => {
  const { authUser, dbUser, loading } = useAuthState();
  
  if (loading) {
    return <Loader />
  }
  return (
    <AuthUserContext.Provider value={{ authUser, dbUser, loading }}>
      <div className="app" data-testid="comp-app">
        <Header />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route exact path={ROUTES.ACCOUNT} component={Account} />
          <Route exact path={ROUTES.NOT_ALLOWED} component={NotAllowed} />
          <Route path={ROUTES.NO_MATCH} component={NoMatch} />
        </Switch>
      </div>
    </AuthUserContext.Provider>
  )
}
