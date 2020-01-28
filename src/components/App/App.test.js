import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter as Router, useHistory } from 'react-router-dom';
import { findByTestAttr } from '../../../tests/testUtils';
import {App} from './App';

const setup = (props={}, route) => {
  const setupProps = {...props}
  route = route || '/';
  return mount(
    <Router initialEntries={[route]}>
      <App {...props} />
    </Router>
  );
}

test('it renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'comp-app');
  expect(component.length).toBe(1);
});

describe("app navigation", () => {
  let wrapper;
  let component;
  
  beforeEach(() => {
    wrapper = setup();
    component = findByTestAttr(wrapper, 'comp-app');
  });
  
  test('it renders the home page when you click the logo', () => {
    const link = findByTestAttr(wrapper, 'link-logo').last();
    link.simulate('click', { button: 0 });
    const route = wrapper.find('[data-testid="route-home"]');
    expect(route.length).toBe(1);
  });

  test('it renders the home page when you click the home link', () => {
    const link = findByTestAttr(wrapper, 'link-home').last();
    link.simulate('click', { button: 0 });
    const route = wrapper.find('[data-testid="route-home"]');
    expect(route.length).toBe(1);
  });

  test('it renders the about page when you click the about link', () => {
    const link = findByTestAttr(wrapper, 'link-about').last();
    link.simulate('click', { button: 0 });
    const route = wrapper.find('[data-testid="route-about"]');
    expect(route.length).toBe(1);
  });

  test('it renders the sign up page when you click the sign up link', () => {
    const link = findByTestAttr(wrapper, 'link-signup').last();
    link.simulate('click', { button: 0 });
    const route = wrapper.find('[data-testid="route-signup"]');
    expect(route.length).toBe(1);
  });
  
  test('it renders the sign in page when you click the sign in link', () => {
    const link = findByTestAttr(wrapper, 'link-signin').last();
    link.simulate('click', { button: 0 });
    const route = wrapper.find('[data-testid="route-signin"]');
    expect(route.length).toBe(1);
  });
  
  test('it renders the No Match page on unrecognized routes', () => {
    wrapper = setup({}, '/foo')
    const route = wrapper.find('[data-testid="route-nomatch"]');
    expect(route.length).toBe(1);
  });
})
