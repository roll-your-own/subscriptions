import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
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
  
  test('state updates when user changes input', () => {
    const { queryByTestId } = setup();
    fireEvent.change(queryByTestId('input-email'), { target: { value: 'foo' } });
    expect(queryByTestId('input-email').value).toBe("foo");
    
    fireEvent.change(queryByTestId('input-password'), { target: { value: 'bar' } });
    expect(queryByTestId('input-password').value).toBe("bar");
    
    fireEvent.change(queryByTestId('input-confirmPassword'), { target: { value: 'baz' } });
    expect(queryByTestId('input-confirmPassword').value).toBe("baz");
  });
});
