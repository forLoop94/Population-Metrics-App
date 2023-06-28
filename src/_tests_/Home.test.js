import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Home from '../components/Home';

it('It should render the homepage components correctly', () => {
  const home = render(
    <Router>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>,
  );
  expect(home).toMatchSnapshot();
});