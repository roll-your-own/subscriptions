import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { findByTestAttr } from '../../../tests/testUtils';
import { Header } from './Header';

const setup = (props={}) => {
  const setupProps = {...props}
  const history = createMemoryHistory();
  return mount(
    <Router history={history}>
      <Header {...props} />
    </Router>
  );
}

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'comp-header');
  expect(component.length).toBe(1);
});

it('renders the logo link', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'link-logo').first();
  expect(component.length).toBe(1);
})

describe('logged out navigation', () => {
  it('renders the home link', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'link-home').first();
    expect(component.length).toBe(1);
  })

  it('renders the about link', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'link-about').first();
    expect(component.length).toBe(1);
  })

  it('renders the signup link', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'link-signup').first();
    expect(component.length).toBe(1);
  })

  it('renders the signin link', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'link-signin').first();
    expect(component.length).toBe(1);
  })
})
