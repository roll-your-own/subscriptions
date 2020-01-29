import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { About } from './About';

const setup = (props={}) => {
  const setupProps = {...props}
  const history = createMemoryHistory();
  return render(
    <Router history={history}>
      <About {...props} />
    </Router>
  );
}

beforeEach(cleanup);

it('renders without error', () => {
  const { queryByTestId } = setup();
  expect(queryByTestId('route-about')).toBeTruthy();
});
