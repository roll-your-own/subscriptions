import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { findByTestAttr } from '../../../tests/testUtils';
import { Home } from './Home';

const setup = (props={}) => {
  const setupProps = {...props}
  const history = createMemoryHistory();
  return mount(
    <Router history={history}>
      <Home {...props} />
    </Router>
  );
}

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'route-home');
  expect(component.length).toBe(1);
});
