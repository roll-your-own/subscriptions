import React from 'react';
import { render, cleanup } from '@testing-library/react';
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
    
  });

  test('it renders the home page when you click the home link', () => {
    
  });

  test('it renders the about page when you click the about link', () => {
    
  });

  test('it renders the sign up page when you click the sign up link', () => {
    
  });
  
  test('it renders the sign in page when you click the sign in link', () => {
    
  });
  
  test('it renders the No Match page on unrecognized routes', () => {
    
  });
})
