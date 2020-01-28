import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SignUp } from './SignUp';

const setup = (props={}) => {
  return render(<SignUp {...props} />);
}

beforeEach(cleanup);

it('renders without error', () => {
  const { queryByTestId } = setup();
  expect(queryByTestId('route-signup')).toBeTruthy();
});

describe('sign up form', () => {
  test('loads with inital state', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('input-email').value).toBe("");
    expect(queryByTestId('input-password').value).toBe("");
    expect(queryByTestId('input-confirmPassword').value).toBe("");
  });
});
