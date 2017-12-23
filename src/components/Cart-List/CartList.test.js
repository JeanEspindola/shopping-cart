import React from 'react';
import { shallow } from 'enzyme';
import CartList from './CartList';

it('renders CartList without crashing', () => {
  shallow(<CartList />);
});
