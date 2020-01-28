import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { Header } from '../Header';
import { Home, About, SignUp, SignIn, NoMatch } from '../../routes';

export const App = () => {
  return (
    <div className="app" data-testid="comp-app">
      <Header />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path={ROUTES.SIGNUP} component={SignUp} />
        <Route exact path={ROUTES.SIGNIN} component={SignIn} />
        <Route path={ROUTES.NOMATCH} component={NoMatch} />
      </Switch>
    </div>
  )
}
