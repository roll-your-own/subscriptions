import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SignIn } from './SignIn';

const setup = (props={}) => {
  const setupProps = {...props}
  return render(<SignIn {...props} />);
}

beforeEach(cleanup);

it('renders without error', () => {
  const { queryByTestId } = setup();
  expect(queryByTestId('route-signin')).toBeTruthy();
});
