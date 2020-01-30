import React from 'react';
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';
import Admin from './Admin';

beforeEach(cleanup);

test('it renders without error', () => {
  const { queryByTestId } = render(<Router initialEntries={['/admin']}><Admin /></Router>);
  expect(queryByTestId('route-admin')).toBeTruthy();
});
