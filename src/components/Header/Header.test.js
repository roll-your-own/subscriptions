import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Header } from './Header';

const setup = (props={}) => {
  const setupProps = {...props}
  const history = createMemoryHistory();
  return render(
    <Router history={history}>
      <Header {...props} />
    </Router>
  );
}

beforeEach(cleanup);

it('renders without error', () => {
  const { queryByTestId } = setup();
  expect(queryByTestId('comp-header')).toBeTruthy();
});

it('renders the logo link', () => {
  const { queryByTestId } = setup();
  expect(queryByTestId('link-logo')).toBeTruthy();
})

describe('logged out navigation', () => {
  it('renders the home link', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('link-home')).toBeTruthy();
  })

  it('renders the about link', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('link-about')).toBeTruthy();
  })

  it('renders the signup link', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('link-signup')).toBeTruthy();
  })

  it('renders the signin link', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('link-signin')).toBeTruthy();
  })
})
