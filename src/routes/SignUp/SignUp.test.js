import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../tests/testUtils';
import { SignUp } from './SignUp';

const setup = (props={}) => {
  const setupProps = {...props}
  return shallow(<SignUp {...props} />);
}

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'route-signup');
  expect(component.length).toBe(1);
});
