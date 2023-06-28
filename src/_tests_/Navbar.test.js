import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('It should render the header component Correctly', () => {
  const navbar = render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(navbar).toMatchSnapshot();
});
