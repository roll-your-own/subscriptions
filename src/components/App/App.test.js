import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter as Router, useHistory } from 'react-router-dom';
import {App} from './App';

const setup = (props={}, route) => {
  const setupProps = {...props}
  route = route || '/';
  return render(
    <Router initialEntries={[route]}>
      <App {...props} />
    </Router>
  );
}

beforeEach(cleanup);

test('it renders without error', () => {
  const { queryByTestId } = setup();
  expect(queryByTestId('comp-app')).toBeTruthy;
});

describe("app navigation", () => {
  test('it renders the home page when you click the logo', () => {
    const { queryByTestId } = setup({}, '/asdf'); // start on NoMatch
    fireEvent.click(queryByTestId('link-logo'));
    expect(queryByTestId('route-home')).toBeTruthy();
  });

  test('it renders the home page when you click the home link', () => {
    const { queryByTestId } = setup({}, '/asdf'); // start on NoMatch
    fireEvent.click(queryByTestId('link-home'));
    expect(queryByTestId('route-home')).toBeTruthy();
  });

  test('it renders the about page when you click the about link', () => {
    const { queryByTestId } = setup();
    fireEvent.click(queryByTestId('link-about'));
    expect(queryByTestId('route-about')).toBeTruthy();
  });

  test('it renders the sign up page when you click the sign up link', () => {
    const { queryByTestId } = setup();
    fireEvent.click(queryByTestId('link-signup'));
    expect(queryByTestId('route-signup')).toBeTruthy();
  });
  
  test('it renders the sign in page when you click the sign in link', () => {
    const { queryByTestId } = setup();
    fireEvent.click(queryByTestId('link-signin'));
    expect(queryByTestId('route-signin')).toBeTruthy();
  });
  
  test('it renders the No Match page on unrecognized routes', () => {
    const { queryByTestId } = setup({}, '/foobaz');
    expect(queryByTestId('route-nomatch')).toBeTruthy();
  });
})
