import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { findByTestAttr } from '../../../tests/testUtils';
import { About } from './About';

const setup = (props={}) => {
  const setupProps = {...props}
  const history = createMemoryHistory();
  return mount(
    <Router history={history}>
      <About {...props} />
    </Router>
  );
}

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'route-about');
  expect(component.length).toBe(1);
});
