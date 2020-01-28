import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../tests/testUtils';
import { SignIn } from './SignIn';

const setup = (props={}) => {
  const setupProps = {...props}
  return shallow(<SignIn {...props} />);
}

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'route-signin');
  expect(component.length).toBe(1);
});
