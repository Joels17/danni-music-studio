import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../components/HomePage';

test('renders home page', () => {
  const wrapper = shallow(<HomePage />);
  const result = <div>Home page</div>;

  expect(wrapper.contains(result)).toEqual(true);
});
